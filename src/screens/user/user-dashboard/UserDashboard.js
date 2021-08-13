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
import AddPropertyForm from "../../../components/addPropertyForm/addProperty";
import AddPropertyConstants from "../../../constants/addProperty";

const UserDashboard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [createProperty, setCreateProperty] = useState(false);
  const [data, setData] = useState(
    location.pathname === "/dashboard" && AddPropertyConstants
  );
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setData(AddPropertyConstants);
    }
  }, [location.pathname]);
  return (
    <>
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
            <>
              <h5 className="greeting"> Hello, Vedad!</h5>
              <Button variant="2" click={() => setCreateProperty(true)}>
                Add Property
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
