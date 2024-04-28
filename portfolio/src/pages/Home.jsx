import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Hero from "../components/Hero";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <div className="te-container">
        <span className="top-elipse"></span>
      </div>
      {/* <Navbar /> */}
      <span
        className="logo-container"
        style={{ float: "left", marginLeft: "0px" }}
      >
        <Logo style={{ width: "40px" }} />
      </span>
      <span
        className="logo-container"
        style={{ float: "right", marginLeft: "0px" }}
      >
        ayush.thumar@outlook.com
      </span>
      <Hero />
    </>
  );
};

export default Home;
