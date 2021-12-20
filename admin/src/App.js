import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./container/Home";
import Signup from "./container/Signup";
import Signin from "./container/Signin";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/signup"  component={Signup} />
            <Route path="/signin"  component={Signin} />
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
