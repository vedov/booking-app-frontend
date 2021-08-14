import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import FindProperty from "../../components/findProperty/findProperty";
import Card from "../../components/card/card";

// React modal scss is imported in main styles

const LandingPage = () => {
  const [sarajevoProperties, setSarajevoProperties] = useState([]);
  const [bosniaProperties, setBosniaProperties] = useState([]);
  const [apartments, setApartments] = useState([]);
  const fetchPropertiesSarajevo = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/property/all/city/Sarajevo?secret_token=" +
          localStorage.getItem("token"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setSarajevoProperties(res.data);
      });
  };

  const fetchPropertiesBosnia = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/property/all/country/BiH?secret_token=" +
          localStorage.getItem("token"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setBosniaProperties(res.data);
      });
  };
  const fetchApartments = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/property/all/type/Apartment?secret_token=" +
          localStorage.getItem("token"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setApartments(res.data);
      });
  };

  useEffect(async () => {
    await fetchPropertiesSarajevo();
    await fetchApartments();
    await fetchPropertiesBosnia();
  }, []);

  return (
    <div className="landing-page-wrapper">
      <Navbar />
      <Header />
      <div className="landing-page-content">
        <h3>Explore Sarajevo</h3>
        <div className="landing-page-cards">
          {sarajevoProperties &&
            sarajevoProperties.map((item) => {
              return (
                <Card
                  id={item._id}
                  name={item.name}
                  description={item.propertyType.description}
                  address={item.location.address}
                  city={item.location.city}
                  pricePerNight={item.pricePerNight}
                  image={item.imageUrls[0]}
                ></Card>
              );
            })}
        </div>
      </div>
      <div className="landing-page-content">
        <h3>Explore Bosnia and Herzegovina</h3>
        <div className="landing-page-cards">
          {bosniaProperties &&
            bosniaProperties.map((item) => {
              return (
                <Card
                  id={item._id}
                  name={item.name}
                  description={item.propertyType.description}
                  address={item.location.address}
                  city={item.location.city}
                  pricePerNight={item.pricePerNight}
                  image={item.imageURLs}
                  size="small"
                ></Card>
              );
            })}
        </div>
      </div>
      <div className="landing-page-content">
        <h3>Find Apartments</h3>
        <div className="landing-page-cards">
          {apartments &&
            apartments.map((item) => {
              return (
                <Card
                  id={item._id}
                  name={item.name}
                  description={item.propertyType.description}
                  address={item.location.address}
                  city={item.location.city}
                  pricePerNight={item.pricePerNight}
                  image={item.imageURLs}
                  size="small"
                ></Card>
              );
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
