import React from "react";
import "./App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./container/Home";
import Signup from "./container/Signup";
import Signin from "./container/Signin";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

          <Route  path = "/" exact element ={<Home />} />
          <Route  path = "/signup" element ={<Signup />} />
          <Route  path = "/signin" element ={<Signin />} />
       
      </Routes>
     
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
