import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/card";
import SearchResult from "../../components/searchResult/searchResult";
import Navbar from "../../components/navbar/navbar";
const SearchedProperties = (props) => {
  const [apartments, setApartments] = useState([]);
  const propsLink = props.location.state;

  const searchForProperties = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          `/property/search?city=${propsLink.city}&numberOfGuests=${propsLink.numberOfGuests}`,
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
    window.scrollTo(0, 0);
    searchForProperties();
  }, []);
  return (
    <>
      <div className="searched-properties-wrapper">
        <Navbar />
        <div className="container">
          <h3>Find Apartments</h3>
          <div className="search-results">
            {apartments &&
              apartments.map((item) => {
                return (
                  <SearchResult
                    id={item._id}
                    name={item.name}
                    description={item.propertyType.description}
                    address={item.location.address}
                    city={item.location.city}
                    pricePerNight={item.pricePerNight}
                    image={item.imageUrls[0]}
                    key={item._id}
                  ></SearchResult>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchedProperties;
