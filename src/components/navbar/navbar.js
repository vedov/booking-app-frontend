import React, { useState, useEffect } from "react";
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
            routes.map((entry, index) => {
              return (
                <NavLink route={entry.route} key={index}>
                  <Button variant="3">{entry.title}</Button>
                </NavLink>
              );
            })}
        </ul>
      </div>
      <div className="right">
        {localStorage.getItem("token") ? (
          <>
            <Link to="/logout">
              <Button variant="3">Log Out</Button>
            </Link>
            <Link to="/dashboard/mydashboard">
              <Button variant="3">Dashboard</Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="3">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="2">Register</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
