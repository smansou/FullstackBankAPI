import "./accounts.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Accounts() {
  const [accounts, setAccounts] = useState();
  const [refresh, setRefresh] = useState(true);

useEffect( () => {
  async function fetch(){
  const { data: accounts } = await axios.get("http://localhost:5000/accounts");
  setAccounts(accounts);

  }
  console.log(refresh);
  fetch();
}, [refresh])


  const getAllAccounts =  () => {
    if(accounts){
   return accounts.map((account, i) => {
    return (
      <tr key={i}>
      <td>{account._id}</td>
      <td> {account.balance} </td>
      <td> {account.credit}</td>
      <td> {(account.isActive).toString()}</td>
      <td> {account.owner}</td>
    </tr>
      )
   })
  }else{
    return <div className="ui message">Could not Load Data</div>
  }
    
  }
    

 

  return (
    <div>
      <div className="ui container">
        <br />
        <div className="ui blue inverted segment">
          <div className="ui blue inverted menu">
            <div className="item">
              <h1 className="ui inverted header">KANBANK</h1>
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
            <div onClick={()=>setRefresh(!refresh)} className="ui button">
              Get All Accounts
            </div>
            <div class="ui compact menu">
              <div class="ui simple dropdown item">
                Transfer
                <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item">
                    Sender ID
                    <div class="ui left icon input">
                      <input type="text" placeholder="Search users..." />
                      <i class="users icon"></i>
                    </div>{" "}
                  </div>
                  <div class="item">
                    Reciever ID
                    <div class="ui left icon input">
                      <input type="text" placeholder="Search users..." />
                      <i class="users icon"></i>
                    </div>
                  </div>
                  <div class="item">
                    Amount
                    <div class="ui left icon input">
                      <input type="text" placeholder="Search users..." />
                      <i class="money icon"></i>
                    </div>
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
