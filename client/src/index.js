import React from 'react';
import ReactDOM from 'react-dom/client';
import Accounts from './Accounts';
import Clients from './Clients';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
        </div>
        <Clients/>
    {/* <Accounts/> */}
    </div>
    

);

