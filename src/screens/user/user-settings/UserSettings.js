import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import PanelNavigation from "../../../components/panel-navigation/PanelNavigation";
import DashboardNavigationConstants from "../../../constants/dashboardNavigation";
import Navbar from "../../../components/navbar/navbar";
import Button from "../../../components/button/button";
import UserInfoForm from "../../../components/userInfoForm/userInfoForm";

const UserSettings = () => {
  const [userInfo, setUserInfo] = useState([]);
  const userID = jwtDecode(localStorage.getItem("token")).user.id;
  const [editProfile, setEditProfile] = useState(false);

  const fetchUserInfo = async () => {
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
        console.log(res.data.user);
        setUserInfo(res.data.user);
      });
  };

  useEffect(async () => {
    await fetchUserInfo();
  }, [editProfile]);
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-wrapper">
        <PanelNavigation data={DashboardNavigationConstants} />
        <div className="panel user-dashboard-wrapper">
          {userInfo && (
            <div className="col">
              {editProfile ? (
                <>
                  <UserInfoForm
                    setEditProfile={setEditProfile}
                    userInfo={userInfo}
                  />
                </>
              ) : (
                <>
                  <div className="row">
                    <h5 className="greeting">
                      Hello,{" "}
                      {userInfo.fullName && userInfo.fullName.split(" ")[0]}!
                    </h5>
                    <Button variant="2" click={() => setEditProfile(true)}>
                      Edit Profile
                    </Button>
                  </div>
                  <hr></hr>
                  <div className="user-card">
                    <h5 className="greeting"> Your Profile</h5>
                    <div className="user-image">
                      <img src={userInfo.userImage}></img>
                    </div>
                    <div className="user-info">
                      <div className="text-field">
                        <p className="label">Full Name: </p>
                        <p className="text">{userInfo.fullName} </p>
                      </div>
                      <div className="text-field">
                        <p className="label">Email: </p>
                        <p className="text">{userInfo.email} </p>
                      </div>
                      <div className="text-field">
                        <p className="label">Phone Number: </p>
                        <p className="text">{userInfo.phoneNumber} </p>
                      </div>
                      <div className="text-field">
                        <p className="label">Date Joined: </p>
                        <p className="text">{userInfo.dateJoined} </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
