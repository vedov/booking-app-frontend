import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

import jwtDecode from "jwt-decode";
import Button from "../button/button";
const CreateReservation = (props) => {
  const location = useLocation();
  const history = useHistory();
  const propertyID = location.pathname.split("/")[2];
  const property = props.property;
  const [propertyGuest, setPropertyGuest] = useState(property.maxGuests);
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const userID = jwtDecode(localStorage.getItem("token")).user.id;

  const CreateReservation = async (dateStart, dateEnd, numberOfGuests) => {
    return await axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          `/reservation/create-new?secret_token=` +
          localStorage.getItem("token"),
        {
          dateStart: dateStart,
          dateEnd: dateEnd,
          guest: userID,
          numberOfGuests: numberOfGuests,
          property: propertyID,
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  useEffect(async () => {
    console.log(property);
  }, []);
  const handleDateStart = (e) => {
    const date = new Date(e.target.value);
    setDateStart(date.toLocaleDateString());
    console.log(date.toLocaleDateString());
  };
  const handleDateEnd = (e) => {
    const date = new Date(e.target.value);
    setDateEnd(date.toLocaleDateString());
    console.log(date.toLocaleDateString());
  };
  const handleGuests = (e) => {
    setNumberOfGuests(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    if (numberOfGuests <= propertyGuest) {
      CreateReservation(dateStart, dateEnd, numberOfGuests);
      history.push("/dashboard/mydashboard");
    }
  };
  return (
    <div className="find-property-wrapper">
      <div className="find-property-card">
        <div className="selector">
          <div className="field">
            <h6>Check In</h6>
            <input
              type="date"
              placeholder="Set a Date"
              onClick={(e) => handleDateStart(e)}
            ></input>
          </div>
          <div className="field">
            <h6>Check Out</h6>
            <input
              type="date"
              placeholder="Set a Date"
              onClick={(e) => handleDateEnd(e)}
            ></input>
          </div>
          <div className="field">
            <h6>Guests</h6>
            <input
              type="number"
              placeholder="Number of guests"
              onChange={(e) => handleGuests(e)}
            ></input>
          </div>
        </div>
        <div className="field">
          <br />
          <Button variant="2" click={() => handleSubmit()}>
            Create Reservation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateReservation;
