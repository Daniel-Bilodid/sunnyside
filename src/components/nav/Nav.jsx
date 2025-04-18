import React from "react";
import "./nav.scss";
import logo from "../../assets/logo.svg";
import Burger from "../burger/Burger";

function Nav() {
  return (
    <section className="container">
      <nav className="nav">
        <div>
          <img className="nav__list-logo" src={logo} alt="sunnyside" />
        </div>

        <ul className="nav__list">
          <li className="nav__list-item">
            <button>About</button>
          </li>
          <li className="nav__list-item">
            <button> Services</button>
          </li>
          <li className="nav__list-item">
            <button>Projects</button>
          </li>
          <li className="nav__list-item nav__list-button">
            <button>CONTACT</button>
          </li>
        </ul>
        <div className="nav__burger">
          <Burger />
        </div>
      </nav>
    </section>
  );
}

export default Nav;
