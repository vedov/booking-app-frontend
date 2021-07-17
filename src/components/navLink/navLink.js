import React from "react";
import { Link } from "react-router-dom";
const NavLink = (props) => {
  return (
    <Link className="nav-link" to={props.route ? props.route : null}>
      {props.children}
    </Link>
  );
};
export default NavLink;
