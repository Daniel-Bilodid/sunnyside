import React from "react";
import Nav from "../nav/Nav";
import arrowDown from "../../assets/icon-arrow-down.svg";

import "./hero.scss";
function Hero() {
  return (
    <div className="hero">
      <Nav />
      <h1 className="hero__title">We are creatives</h1>
      <img className="hero__arrow" src={arrowDown} alt="arrow down" />
    </div>
  );
}

export default Hero;
