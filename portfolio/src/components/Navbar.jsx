import React from "react";
import "../styles/Navbar.css";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <span
          className="logo-container"
          style={{ float: "left", marginLeft: "0px" }}
        >
          <Logo />
        </span>
        <span className="menu-container">
          <button className="menu-btn active">Home</button>
          <button className="menu-btn">Technology</button>
          <button className="menu-btn">Work</button>
          <button className="menu-btn">About</button>
        </span>

        <button className="contact-btn">Contact</button>
      </div>
    </>
  );
};

export default Navbar;
