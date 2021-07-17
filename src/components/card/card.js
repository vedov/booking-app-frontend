import React from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import image from "../../assets/loginBackground.png";
const Card = () => {
  return (
    <div className="card-wrapper">
      <img src={image} />
      <div className="card-title">
        <h6>TITLE</h6>
      </div>
    </div>
  );
};
export default Card;
