import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Style.css";
import { FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-btn">
      <div>
        <button className="btn1">RACELINE</button>
        <button className="btn2">EVENTS</button>
        <button className="btn3">COMMUNITY</button>
        <button className="btn4">GARAGE</button>
        <button className="btn5">MEDIA</button>
      </div>
      <div>
        <button className="btn6">
          <FaSearch />
        </button>
        <button className="btn7">JOIN NOW</button>
       
      </div>
    </div>
  );
}

export default Navbar;
