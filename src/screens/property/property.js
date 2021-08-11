import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
const Property = () => {
  const [property, setProperty] = useState({});
  const location = useLocation();
  const propertyID = location.pathname.split("/")[2];
  const fetchProperty = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          `/property/${propertyID}?secret_token=` +
          localStorage.getItem("token"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setProperty(res.data);
      });
  };
  useEffect(async () => {
    await fetchProperty();
  }, []);
  return (
    <div className="property-wrapper">
      <Navbar />
      <div className="property-container">
        <div className="title">
          <h4>{property.name && property.name}</h4>
          <div className="info">
            <div className="left">
              <div className="location">
                <h6>
                  {property.location &&
                    property.location.address +
                      ", " +
                      property.location.city +
                      ", " +
                      property.location.country}
                </h6>
              </div>
            </div>
            <div className="right">
              <div className="host">
                <p>
                  {property.host &&
                    property.host.fullName &&
                    property.host.fullName}
                </p>
                <p>
                  {property.host && property.host.email && property.host.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="images">
          <div className="image-main"></div>
          <div className="image-other">
            <div className="image-1"></div>
            <div className="image-2"></div>
          </div>
        </div>

        <div className="detailed-description">
          <h6>
            {property.propertyType &&
              property.propertyType.name &&
              property.propertyType.name}
          </h6>
          <p>{property.description && property.description}</p>
          <p>
            {property.propertyType &&
              property.propertyType.description &&
              property.propertyType.description}
          </p>
        </div>
        <div className="description">
          <div className="left">
            <div className="amenities">
              <h6>Amenities:</h6>
              <div className="grid">
                {property.amenities &&
                  property.amenities.map((item) => {
                    return <p>{item.name && item.name}</p>;
                  })}
              </div>
            </div>
            <div className="room">
              <h6>This Property Features: </h6>
              <div className="grid">
                <p>Bathrooms: {property.bathrooms && property.bathrooms}</p>
                <p>Bedrooms: {property.bedrooms && property.bedrooms}</p>
                <p>Beds: {property.beds && property.beds}</p>
                <p>
                  Max. number of guests:{" "}
                  {property.maxGuests && property.maxGuests}
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="price">
              <p>
                Price per night:{" "}
                {property.pricePerNight && property.pricePerNight}
              </p>
            </div>
            <div className="cancel">
              <p>
                Free Cancellation:
                {property.freeCancel && property.freeCancel ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>

        <div className="map">
          <h6>Location:</h6>
          <div className="placeholder-map"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Property;
