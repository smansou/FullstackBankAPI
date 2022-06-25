import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState();
  const [edit, setEdit] = useState({
    id: '',
    field: '',
    newValue: '',
  });
  const [refresh, setRefresh] = useState(true);
  
  useEffect(() => {
    async function fetch() {
      const { data: clients } = await axios.get(`${process.env.REACT_APP_DBURL}/clients`);
      setClients(clients);
    }
    fetch();
  }, [refresh]);

  const updateClient = async () =>{
      const {id, field, newValue} = edit;
      await axios.patch(`${process.env.REACT_APP_DBURL}/clients/${id}`, {[`${field}`]: newValue});
      setRefresh(!refresh);
  }

  const getAllClients = () => {
    if (clients) {
      return clients.map((client, i) => {
        return (
          <tr key={i}>
            <td>{client._id}</td>
            <td> {client.firstName} </td>
            <td> {client.lastName}</td>
            <td> {client.email}</td>
          </tr>
        );
      });
    } else {
      return <tr className="ui message"><td>Could not Load Data</td></tr>;
    }
  };

  return (
    <div>
            <div className="ui container">

        <div className="ui divider"></div>
        <div className="five wide column">
          <div className="ui segment">
            <div onClick={() => setRefresh(!refresh)} className="ui button">
              Refresh
            </div>
            <div className="ui compact menu">
              <div className="ui simple dropdown item">
                Edit
                <i className="edit icon"></i>
                <div className="menu">
                  <div className="item">
                    Client ID
                    <div className="ui left icon input">
                      <input type="text" placeholder="Client ID" onChange={e=>setEdit({...edit, id: e.target.value })}/>
                      <i className="users icon"></i>
                    </div>{" "}
                  </div>
                  <div className="item">
                   Field
                    <div className="ui left icon input">
                      <select onChange={e=>setEdit({...edit, field: e.target.value })} type="text" placeholder="Field">
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>
                  <div className="item">
                    New Value
                    <div className="ui left icon input">
                      <input type="text" placeholder="New Value" onChange={e=>setEdit({...edit, newValue: e.target.value })} />
                    </div>
                  </div>
                  <div onClick={updateClient} className="ui button">Submit</div>
                </div>
                
              </div>
            </div>
            <div className="ui divider"></div>
            <table className="ui celled table">
              <thead className="">
                <tr className="">
                  <th className="">ID</th>
                  <th className="">First Name</th>
                  <th className="">Last Name</th>
                  <th className="">Email</th>
                </tr>
              </thead>
              <tbody>{getAllClients()}</tbody>
            </table>
          </div>
        </div>
        <div className="ui grid"></div>
        <br />
    </div>
    </div>
  );
}
