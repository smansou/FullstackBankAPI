import "./accounts.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
      const { data: accounts } = await axios.get(
        "http://localhost:5000/accounts"
      );
      setAccounts(accounts);
    }
    fetch();
  }, [refresh]);

  const handleSubmit = async () => {
    const { id, field, newValue } = edit;
    await axios.patch(`http://localhost:5000/accounts/${id}`, {
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
      return <div className="ui message">Could not Load Data</div>;
    }
  };

  return (
    <div>
      <div className="ui container">
        <br />
        <div className="ui blue inverted segment">
          <div className="ui blue inverted menu">
            <div className="item">
              <h1 className="ui inverted header">NEWBANK</h1>
            </div>
            <div className="right item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="five wide column">
          <div className="ui segment">
            <div onClick={() => setRefresh(!refresh)} className="ui button">
              Get All Accounts
            </div>
            <div class="ui compact menu">
              <div class="ui simple dropdown item">
                Edit
                <i class="edit icon"></i>
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
              {getAllAccounts()}
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
