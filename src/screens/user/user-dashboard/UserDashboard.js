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
          <div className="user-dashboard-wrapper row">
            <div className="user-dashboard-wrapper col">
              {createProperty && createProperty ? (
                <>
                  <AddPropertyForm
                    handleAddProperty={(userData) => {
                      dispatch(
                        addProperty({
                          name: userData[0].value,
                          propertyType: userData[1].value,
                          bedrooms: userData[2].value,
                          beds: userData[3].value,
                          bathrooms: userData[4].value,
                          pricePerNight: userData[5].value,
                          maxGuests: userData[6].value,
                          address: userData[7].value,
                          city: userData[8].value,
                          zipCode: userData[9].value,
                          country: userData[10].value,
                          description: userData[11].value,
                          freeCancel: userData[12].value,
                          host: userData[13].value,
                          amenities: userData[14].value,
                        })
                      );
                    }}
                    data={data}
                  ></AddPropertyForm>
                </>
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
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
