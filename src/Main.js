import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Image from "./Image";
import Information from "./Information";
import Contact from "./Contact";


 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Brandol 2.5 PA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/image">Image</NavLink></li>
            <li><NavLink to="/information">Information</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/image" element={<Image />}/>
              <Route path="/information" element={<Information />}/>
              <Route path="/contact" element={<Contact />}/>
          </Routes>
          </div>
        </div>
        
        </HashRouter>
    );
  }
}
 
export default Main;