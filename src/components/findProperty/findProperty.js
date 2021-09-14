import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const FindProperty = () => {
  return (
    <div className="find-property-wrapper">
      <div className="find-property-card">
        <div className="search-field">
          <h6>Location</h6>
          <input type="text" placeholder="Where are you going?"></input>
        </div>
        <div className="field">
          <br />
          <Link to="/search">
            <Button variant="2">Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FindProperty;
