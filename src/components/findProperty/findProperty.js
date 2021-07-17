import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const FindProperty = () => {
  return (
    <div className="find-property-wrapper">
      <div className="find-property-card">
        <div className="field">
          <h6>Location</h6>
          <p>Where are you going?</p>
        </div>
        <div className="field">
          <h6>Check In</h6>
          <p>Set a Date</p>
        </div>
        <div className="field">
          <h6>Check Out</h6>
          <p>Set a Date</p>
        </div>
        <div className="field">
          <h6>Guests</h6>
          <p>Add Guests</p>
        </div>
        <div className="field">
          <h6>SEARCH</h6>
          <p>SEARCH</p>
        </div>
      </div>
    </div>
  );
};
export default FindProperty;
