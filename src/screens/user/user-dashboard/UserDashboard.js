import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import PanelNavigation from "../../../components/panel-navigation/PanelNavigation";
import DashboardNavigationConstants from "../../../constants/dashboardNavigation";
import { addProperty } from "../../../components/addPropertyForm/addPropertyAction";
import Navbar from "../../../components/navbar/navbar";
import Button from "../../../components/button/button";
import Card from "../../../components/card/card";
import AddPropertyForm from "../../../components/addPropertyForm/addProperty";
import AddPropertyConstants from "../../../constants/addProperty";

const UserDashboard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [createProperty, setCreateProperty] = useState(false);
  const [data, setData] = useState(
    location.pathname === "/dashboard/mydashboard" && AddPropertyConstants
  );
  const [userProperties, setUserProperties] = useState([]);
  const [userReservations, setUserReservations] = useState([]);

  const userID = jwtDecode(localStorage.getItem("token")).user.id;
  const fetchUserPropertiesAndReservations = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          `/user/${userID}?secret_token=` +
          localStorage.getItem("token"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        let arrayReservations = [];
        res.data.reservations.forEach((element) => {
          const object = {
            propertyId: element.property._id,
            dateStart: element.dateStart,
            dateEnd: element.dateEnd,
            numberOfGuests: element.numberOfGuests,
            image: element.property.imageUrls[0],
            name: element.property.name,
            pricePerNight: element.property.pricePerNight,
          };
          arrayReservations.push(object);
        });
        setUserProperties(res.data.properties);
        setUserReservations(arrayReservations);
      });
  };

  useEffect(() => {
    fetchUserPropertiesAndReservations();
    if (location.pathname === "/dashboard/mydashboard") {
      setData(AddPropertyConstants);
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-wrapper">
        <PanelNavigation data={DashboardNavigationConstants} />
        <div className="panel user-dashboard-wrapper">
          {createProperty && createProperty ? (
            <AddPropertyForm
              handleAddProperty={(userData) => {
                dispatch(
                  addProperty({
                    name: userData[0].value,
                    propertyType: userData[1].value,
                    amenities: userData[2].value,
                    imageUrls: userData[3].value,
                    bedrooms: userData[4].value,
                    beds: userData[5].value,
                    bathrooms: userData[6].value,
                    pricePerNight: userData[7].value,
                    maxGuests: userData[8].value,
                    address: userData[9].value,
                    city: userData[10].value,
                    zipCode: userData[11].value,
                    country: userData[12].value,
                    lat: userData[13].value,
                    lng: userData[14].value,
                    description: userData[15].value,
                    freeCancel: userData[16].value,
                  })
                );
              }}
              data={data}
              setCreateProperty={setCreateProperty}
            ></AddPropertyForm>
          ) : (
            <div className="col">
              <div className="row">
                <h5 className="greeting"> Dashboard</h5>
                <Button variant="2" click={() => setCreateProperty(true)}>
                  Add Property
                </Button>
              </div>
              <hr></hr>
              <h5 className="greeting"> Your Properties</h5>
              <div className="dashboard-cards">
                {userProperties &&
                  userProperties.map((item, index) => {
                    return (
                      <Card
                        id={item._id}
                        name={item.name}
                        description={item.propertyType.description}
                        address={item.location.address}
                        city={item.location.city}
                        pricePerNight={item.pricePerNight}
                        image={item.imageUrls[0]}
                        key={index}
                      ></Card>
                    );
                  })}
              </div>
              <h5 className="greeting"> Your Bookings</h5>
              <div className="dashboard-cards">
                {userReservations &&
                  userReservations.map((item, index) => {
                    const dateStart = item.dateStart.slice(0, 10);
                    const dateEnd = item.dateEnd.slice(0, 10);
                    return (
                      <Card
                        id={item.propertyId}
                        name={item.name}
                        image={item.image}
                        dateStart={dateStart}
                        dateEnd={dateEnd}
                        numberOfGuests={
                          "Number Of Guests: " + item.numberOfGuests
                        }
                        pricePerNight={item.pricePerNight}
                        key={index}
                      ></Card>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
