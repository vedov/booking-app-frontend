import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Map from "../Map/Map";
import Button from "../button/button";
const EditProperty = (props) => {
  const location = useLocation();
  const propertyID = location.pathname.split("/")[2];
  const property = props.property;

  const [propertyName, setPropertyName] = useState(property.name);
  const [propertyDesc, setPropertyDesc] = useState(property.description);
  const [propertyBath, setPropertyBath] = useState(property.bathrooms);
  const [propertyBedroom, setPropertyBedroom] = useState(property.bedrooms);
  const [propertyBed, setPropertyBed] = useState(property.beds);
  const [propertyGuest, setPropertyGuest] = useState(property.maxGuests);
  const [propertyPrice, setPropertyPrice] = useState(property.pricePerNight);

  const editPropertyInfo = async () => {
    return await axios
      .patch(
        process.env.REACT_APP_BACKEND_URL +
          `/property/${propertyID}` +
          localStorage.getItem("token"),
        {
          name: propertyName,
          description: propertyDesc,
          bathrooms: propertyBath,
          bedrooms: propertyBedroom,
          beds: propertyBed,
          maxGuests: propertyGuest,
          pricePerNight: propertyPrice,
        }
      )
      .then((res) => {
        console.log(res.data.user);
      });
  };
  useEffect(async () => {
    console.log(property);
  }, []);
  return (
    <div className="property-container">
      <div className="content">
        <div className="title">
          <div className="edit-field">
            <label>Name</label>
            <input
              type="text"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>
          <Button
            variant="2"
            click={() => {
              editPropertyInfo();
              props.setEditProperty(false);
            }}
          >
            Save Edits
          </Button>
        </div>
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
              <h6>
                {property.host &&
                  property.host.fullName &&
                  property.host.fullName}
              </h6>
              <p>
                {property.host && property.host.email && property.host.email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="images">
        <div className="image-main">
          <img src={property.imageUrls && property.imageUrls[0]}></img>
        </div>
        <div className="image-other">
          <img src={property.imageUrls && property.imageUrls[1]}></img>
        </div>
      </div>

      <div className="detailed-description">
        <h6>
          {property.propertyType &&
            property.propertyType.name &&
            property.propertyType.name}
        </h6>
        <div className="edit-field">
          <label>Description</label>
          <input
            type="text"
            value={propertyDesc}
            onChange={(e) => setPropertyDesc(e.target.value)}
          />
        </div>
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
              <div className="edit-field">
                <label>Bathrooms</label>
                <input
                  type="number"
                  value={propertyBath}
                  onChange={(e) => setPropertyBath(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Bedrooms</label>
                <input
                  type="number"
                  value={propertyBedroom}
                  onChange={(e) => setPropertyBedroom(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Beds</label>
                <input
                  type="number"
                  value={propertyBed}
                  onChange={(e) => setPropertyBed(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Max. number of guests: </label>
                <input
                  type="number"
                  value={propertyGuest}
                  onChange={(e) => setPropertyGuest(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <div className="edit-field">
              <label>Price per night</label>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
              />
            </div>
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
        {property.location && (
          <Map lng={property.location.lng} lat={property.location.lat}></Map>
        )}
      </div>
    </div>
  );
};

export default EditProperty;
