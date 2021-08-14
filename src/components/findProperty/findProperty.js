import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const FindProperty = () => {
  return (
    <div className="find-property-wrapper">
      <div className="find-property-card">
        <div className="field">
          <h6>Location</h6>
          <input type="text" placeholder="Where are you going?"></input>
        </div>
        <div className="field">
          <h6>Check In</h6>
          <input type="date" placeholder="Set a Date"></input>
        </div>
        <div className="field">
          <h6>Check Out</h6>
          <input type="date" placeholder="Set a Date"></input>
        </div>
        <div className="field">
          <h6>Guests</h6>
          <input type="number" placeholder="Number of guests"></input>
        </div>
        <div className="field">
          <br />
          <Button variant="2">Search</Button>
        </div>
      </div>
    </div>
  );
};
export default FindProperty;
