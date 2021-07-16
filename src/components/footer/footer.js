import React from "react";
/* import {Link} from "react-router-dom"
import logo from "../../assets/qyers-logo.svg"; */

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="left">
        <div className="footer-logo">
          {/*           <img src={logo} alt="Logo" height="48px"></img> */}
          <h4>Booker</h4>
        </div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
          tempor incididunt labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea
          commodo consequat.
        </p>
      </div>
      <div className="right">
        <ul>
          <p>Our Links</p>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/benefits">Benefits</Link></li>
          <li><Link to="/options">Options</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li> */}
        </ul>
        <ul>
          <p>Our Company</p>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
        <ul>
          <p>Our Services</p>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div className="copyright"></div>
    </div>
  );
};
export default Footer;
