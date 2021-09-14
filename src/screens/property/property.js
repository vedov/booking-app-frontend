import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Map from "../../components/Map/Map";
import jwtDecode from "jwt-decode";
import Button from "../../components/button/button";
import EditProperty from "../../components/editProperty/editProperty";
import CreateReservation from "../../components/createReservation/createReservation";
const Property = () => {
  const [property, setProperty] = useState({});
  const location = useLocation();
  const propertyID = location.pathname.split("/")[2];
  const [editButton, setEditButton] = useState(false);
  const [editProperty, setEditProperty] = useState(false);
  const [createReservation, setCreateReservation] = useState(false);
  //const userMail = jwtDecode(localStorage.getItem("token")).user.email;

  const fetchProperty = async () => {
    return await axios
      .get(process.env.REACT_APP_BACKEND_URL + `/property/${propertyID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setProperty(res.data);
        /* if (res.data && res.data.host && res.data.host.email == userMail)
          setEditButton(true); */
      });
  };

  useEffect(async () => {
    await fetchProperty();
    window.scrollTo(0, 0);
  }, []);
  const checkEdit = (editProperty) => {};
  const checkSelected = (editProperty, createReservation) => {
    if (editProperty === true)
      return (
        <EditProperty
          setEditProperty={setEditProperty}
          property={property}
        ></EditProperty>
      );
    else if (createReservation === true)
      return (
        <>
          <CreateReservation
            setCreateReservation={setCreateReservation}
            property={property}
          ></CreateReservation>
          <div className="property-container">
            <div className="content">
              <div className="title">
                <h4>{property.name && property.name}</h4>
                {editButton ? (
                  <Button variant="1" click={() => setEditProperty(true)}>
                    Edit Property
                  </Button>
                ) : createReservation ? (
                  <></>
                ) : (
                  <Button variant="2" click={() => setCreateReservation(true)}>
                    Book Property
                  </Button>
                )}
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
            <div className="host">
              <h6>About The Host</h6>
              <div className="host-info">
                <img src={property.host && property.host.userImage} />
                <div className="col-1">
                  <p>
                    {property.host &&
                      property.host.fullName &&
                      property.host.fullName}
                  </p>
                  <div className="col-2">
                    <p>
                      {property.host &&
                        property.host.email &&
                        property.host.email}{" "}
                    </p>
                    <p>{property.host && property.host.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map">
              <h6>Location:</h6>
              {property.location && (
                <Map
                  lng={property.location.lng}
                  lat={property.location.lat}
                ></Map>
              )}
            </div>
          </div>
        </>
      );
    return null;
  };

  const showInfo = (editProperty, createReservation) => {
    if (checkSelected(editProperty, createReservation) === null)
      return (
        <div className="property-container">
          <div className="content">
            <div className="title">
              <h4>{property.name && property.name}</h4>
              {editButton ? (
                <Button variant="1" click={() => setEditProperty(true)}>
                  Edit Property
                </Button>
              ) : (
                <Button variant="2" click={() => setCreateReservation(true)}>
                  Book Property
                </Button>
              )}
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
          <div className="host">
            <h6>About The Host</h6>
            <div className="host-info">
              <img src={property.host && property.host.userImage} />
              <div className="col-1">
                <p>
                  {property.host &&
                    property.host.fullName &&
                    property.host.fullName}
                </p>
                <div className="col-2">
                  <p>
                    {property.host &&
                      property.host.email &&
                      property.host.email}{" "}
                  </p>
                  <p>{property.host && property.host.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <h6>Location:</h6>
            {property.location && (
              <Map
                lng={property.location.lng}
                lat={property.location.lat}
              ></Map>
            )}
          </div>
        </div>
      );
    else return checkSelected(editProperty, createReservation);
  };

  return (
    <div className="property-wrapper">
      <Navbar />
      {showInfo(editProperty, createReservation)}
      <Footer></Footer>
    </div>
  );
};

export default Property;
