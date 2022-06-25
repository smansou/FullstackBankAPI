import React from "react";
import ReactDOM from "react-dom/client";
import Accounts from "./Accounts";
import Clients from "./Clients";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div>
      <div className="ui container">
        <br />
        <div className="ui blue inverted segment">
          <div className="ui blue inverted menu">
            <div className="item">
              <h1 className="ui inverted header">NEWBANK</h1>
            </div>
            <div className="right item">
            <div className=" ui buttons">
              <Link to={'/accounts'}> <button className="ui button">Accounts</button> </Link>
              <Link to={'/clients'}> <button className="ui button">Clients</button> </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/accounts" element={<Accounts />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
      </Routes>
    </div>
  </Router>
);
