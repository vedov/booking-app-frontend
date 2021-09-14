import React, { useState } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const FindProperty = () => {
  const [city, setCity] = useState("Sarajevo");
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleCityInput = (e) => {
    setCity(e.target.value);
  };
  const handleGuestInput = (e) => {
    setNumberOfGuests(e.target.value);
  };
  return (
    <div className="find-property-wrapper">
      <div className="find-property-card">
        <div className="search-field">
          <h6>Location</h6>
          <input
            type="text"
            placeholder="Where are you going?"
            onChange={(e) => handleCityInput(e)}
            value={city}
          ></input>
        </div>
        <div className="field">
          <h6>Number Of Guests</h6>
          <input
            type="number"
            placeholder="Number of Guests"
            onChange={(e) => handleGuestInput(e)}
            value={numberOfGuests}
          ></input>
        </div>
        <div className="field">
          <br />
          <Link
            to={{
              pathname: "/search",
              state: { city, numberOfGuests },
            }}
          >
            <Button variant="2">Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FindProperty;
