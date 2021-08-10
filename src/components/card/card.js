import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Card = (props) => {
  const location = props.address + ", " + props.city;
  return (
    <Link to={"/property/" + props.id}>
      <div className="card-wrapper">
        <img src={props.image} />
        <div className="card-title">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <p>{location}</p>
          <h6>$ {props.pricePerNight} per Night</h6>
        </div>
      </div>
    </Link>
  );
};
export default Card;
