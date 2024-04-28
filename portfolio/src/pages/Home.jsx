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
      <div className="header">
        <span
          className="logo-container"
          style={{ float: "left", marginLeft: "0px" }}
        >
          <Logo style={{ width: "40px" }} />
        </span>
        <span className="email">
          <a href="mailto:hello@ayushthumar.dev">hello@ayushthumar.dev</a>
        </span>
      </div>
      <Hero />
    </>
  );
};

export default Home;
