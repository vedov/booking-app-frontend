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
              return (
                <NavLink route={entry.route}>
                  <Button variant="3">{entry.title}</Button>
                </NavLink>
              );
            })}
        </ul>
      </div>
      <div className="right">
        <Link to="/login">
          <Button variant="3">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="2">Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
