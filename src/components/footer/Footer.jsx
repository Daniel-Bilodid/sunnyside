import React from "react";
import "./footer.scss";
import logo from "../../assets/sunnyside.png";
import facebook from "../../assets/icon-facebook.svg";
import instargram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img className="footer__logo" src={logo} alt="logo" />

        <ul className="footer__list">
          <li className="footer__list-item">About</li>
          <li className="footer__list-item">Services</li>
          <li className="footer__list-item">Projects</li>
        </ul>

        <div className="footer__icons">
          <a href="#" className="footer__icons-icon">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" className="footer__icons-icon">
            <img src={instargram} alt="instagram" />
          </a>
          <a href="#" className="footer__icons-icon">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#" className="footer__icons-icon">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
