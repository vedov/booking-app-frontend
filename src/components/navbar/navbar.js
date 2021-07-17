import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import NavLink from "../navLink/navLink";
import Routes from "../../constants/routes";
const Navbar = () => {
  const routes = [...Routes];
  return (
    <div className="navbar-wrapper">
      <div className="left">
        <ul className="navbar-list">
          {routes &&
            routes.map((entry) => {
              return <NavLink route={entry.route}>{entry.title}</NavLink>;
            })}
        </ul>
      </div>
      <div className="right">
        <Link to="/login">
          <Button variant="2">Login</Button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
