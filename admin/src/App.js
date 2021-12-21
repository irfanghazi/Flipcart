import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home/home"
import Signin from "./container/Signin/signin"
import Signup from "./container/Signup/signup"
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
