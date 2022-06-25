import "./accounts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";


function Accounts() {
  const [accounts, setAccounts] = useState();
  const [edit, setEdit] = useState({
    id: "",
    field: "",
    newValue: "",
  });

  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    async function fetch() {
      const { data: accounts } = await axios.get(`${process.env.REACT_APP_DBURL}/accounts`); //* change to ENV
      setAccounts(accounts);
    }
    fetch();
  }, [refresh]);

  const handleSubmit = async () => {
    const { id, field, newValue } = edit;
    await axios.patch(`${process.env.REACT_APP_DBURL}/accounts/${id}`, {
      [`${field}`]: newValue,
    });
    setRefresh(!refresh);
  };

  const getAllAccounts = () => {
    if (accounts) {
      return accounts.map((account, i) => {
        return (
          <tr key={i}>
            <td>{account._id}</td>
            <td> {account.balance} </td>
            <td> {account.credit}</td>
            <td> {account.isActive.toString()}</td>
            <td> {account.owner}</td>
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
                    Account ID
                    <div className="ui left icon input">
                      <input
                        type="text"
                        placeholder="Account ID"
                        onChange={(e) =>
                          setEdit({ ...edit, id: e.target.value })
                        }
                      />
                      <i className="users icon"></i>
                    </div>{" "}
                  </div>
                  <div className="item">
                    Field
                    <div className="ui left icon input">
                      <select
                        onChange={(e) =>
                          setEdit({ ...edit, field: e.target.value })
                        }
                        type="text"
                        placeholder="Field"
                      >
                        <option value="balance">Balance</option>
                        <option value="credit">Credit</option>
                        <option value="isActive">Active</option>
                      </select>
                    </div>
                  </div>
                  <div className="item">
                    New Value
                    <div className="ui left icon input">
                      <input
                        type="text"
                        placeholder="New Value"
                        onChange={(e) =>
                          setEdit({ ...edit, newValue: e.target.value })
                        }
                      />
                      <i className="new icon"></i>
                    </div>
                  </div>
                  <div onClick={handleSubmit} className="ui button">
                    Submit
                  </div>
                </div>
              </div>
            </div>
            <div className="ui divider"></div>
            <table className="ui celled table">
              <thead className="">
                <tr className="">
                  <th className="">ID</th>
                  <th className="">Balance</th>
                  <th className="">Credit</th>
                  <th className="">isActive</th>
                  <th className="">Owner</th>
                </tr>
              </thead>
              <tbody>{getAllAccounts()}</tbody>
            </table>
          </div>
        </div>
        <div className="ui grid"></div>
        <br />
      </div>
    </div>
  );
}

export default Accounts;
