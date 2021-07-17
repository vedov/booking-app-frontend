import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="content">
        <div className="left-side">
          <h3>Booker</h3>
          <h1>WANDERLUST?</h1>
          <h6>Find and book an experience you’ll remember forever.</h6>
          <Link to="/register">
            <Button variant="2">Start Exploring</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
