import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home/home"
import Signin from "./container/Signin/signin"
import Signup from "./container/Signup/signup"
import PrivateRoute from "./components/HOC/PrivateRoute";
import Product from "./container/Products/Product";
import Order from "./container/Orders/Order";
import Category from "./container/Category/Category";

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/category" exact component={Category} />
            <PrivateRoute path="/product" component={Product} />
            <PrivateRoute path="/order" component={Order} />


            <Route path="/signup"  component={Signup} />
            <Route path="/signin"  component={Signin} />
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
