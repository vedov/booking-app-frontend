import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const location = props.address + ", " + props.city;

  return (
    <Link to={"/property/" + props.id}>
      {props.size && props.size === "small" ? (
        <div className="card-wrapper small">
          <img src={props.image} alt="" />
          <div className="card-title">
            <h5>{props.name}</h5>
            <p>{location}</p>
            <h6>$ {props.pricePerNight} per Night</h6>
          </div>
        </div>
      ) : props.size === "medium" ? (
        <div className="card-wrapper medium">
          <img src={props.image} alt="" />
          <div className="card-title">
            <h5>{props.name}</h5>
            <p>{props.description}</p>
            <h6>$ {props.pricePerNight} per Night</h6>
          </div>
        </div>
      ) : (
        <div className="card-wrapper">
          <img src={props.image} alt="" />
          <div className="card-title">
            <h5>{props.name}</h5>
            <p>{props.description}</p>
            <p>{location}</p>
            <h6>$ {props.pricePerNight} per Night</h6>
          </div>
        </div>
      )}
    </Link>
  );
};
export default Card;
