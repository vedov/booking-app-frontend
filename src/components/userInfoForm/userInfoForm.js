import axios from "axios";
import jwtDecode from "jwt-decode";

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/inputField";
const UserInfoForm = (props) => {
  const userID = jwtDecode(localStorage.getItem("token")).user.id;
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState();
  const userInfo = props.userInfo;
  const [fullName, setFullName] = useState(userInfo.fullName);
  const editUserInfo = async () => {
    return await axios
      .patch(
        process.env.REACT_APP_BACKEND_URL +
          `/user/${userID}?secret_token=` +
          localStorage.getItem("token"),
        {
          fullName: "Vedad Vreto",
        }
      )
      .then((res) => {
        console.log(res.data.user);
      });
  };
  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <>
      <div className="row">
        <h5 className="greeting">Edit Profile</h5>
        <Button
          variant="2"
          click={() => {
            props.setEditProfile(false);
            editUserInfo();
          }}
        >
          Save Edits
        </Button>
      </div>
      <hr></hr>
      {userInfo && (
        <form>
          <div className="field">
            <label>Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>
          {/* <label>Password</label>
          <input></input>
          <label>Confirm Password</label>
          <input></input> */}
        </form>
      )}
    </>
  );
};

export default UserInfoForm;
