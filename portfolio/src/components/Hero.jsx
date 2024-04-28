import React from "react";
import "../styles/Hero.css";
import lines from "../videos/lines.mp4";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="video-container">
        {/* <video
          src={lines}
          autoPlay
          loop
          muted
          preload="auto"
          className="video"
        /> */}
      </div>
      <div className="hero-heading">
        <div className="heading">
          <Typewriter
            words={[
              "Ayush is highly skilled software engineer and designer from Houston, Texas",
            ]}
            loop={1}
            cursor
            // cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
