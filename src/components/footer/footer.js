import React from "react";
import { Link } from "react-router-dom";
/* import {Link} from "react-router-dom"
import logo from "../../assets/qyers-logo.svg"; */

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="left">
        <div className="footer-logo">
          <h4>Booker</h4>
        </div>
        <p> Created By Vedad Vreto & Dino-Sven Dedić.</p>
        <a href="https://pmf.unsa.ba/">
          <p>www.pmf.unsa.ba/</p>
        </a>
      </div>
      <div className="right"></div>
    </div>
  );
};
export default Footer;
