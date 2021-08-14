import React, { useEffect } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import image from "../../../src/assets/registerBackground.png";

const SearchResult = (props) => {
  const location = props.address + ", " + props.city;

  return (
    <Link to={"/property/" + props.id}>
      <div className="result-wrapper">
        <img src={props.image} />
        <div className="result-title">
          <h5>{props.name}</h5>
          <p>{props.description}</p>
          <p>{location}</p>
          <h6>$ {props.pricePerNight} per Night</h6>
        </div>
      </div>
    </Link>
  );
};
export default SearchResult;
