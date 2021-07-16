import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
/* import { Link } from "react-router-dom"; */
/* import Button from "../../Ui/button/button";
import NavLink from "../../Ui/navLink/navLink";
import Routes from "../../constants/routes"; */
/* import jwtDecode from "jwt-decode"; */
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      NAVBAR
      <div className="right">
        <Link to="/login">
          <Button variant="1">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="2">Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
