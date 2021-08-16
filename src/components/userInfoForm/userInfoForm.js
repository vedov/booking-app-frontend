import axios from "axios";
import jwtDecode from "jwt-decode";

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/inputField";
const UserInfoForm = (props) => {
  const userID = jwtDecode(localStorage.getItem("token")).user.id;

  const userInfo = props.userInfo;
  const [fullName, setFullName] = useState(userInfo.fullName);
  const [profileImage, setProfileImage] = useState();
  const editUserInfo = async () => {
    return await axios
      .patch(process.env.REACT_APP_BACKEND_URL + `/user/${userID}`, {
        fullName: fullName,
        userImage: profileImage,
      })
      .then((res) => {
        console.log(res.data.user);
      });
  };
  const handleImageSelect = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "f9k4o6vj");
    formData.append("api_key", "236325287598512");
    await axios
      .post("https://api.cloudinary.com/v1_1/dl84dqtbq/image/upload", formData)
      .then((res) => {
        console.log("gurnuo");
        console.log(res.data);
        setProfileImage(res.data.secure_url);
        console.log(res.data.secure_url);
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
            editUserInfo();
            props.setEditProfile(false);
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
          <div className="image-input">
            <label>Upload a Profile Image</label>
            <input type="file" onChange={(e) => handleImageSelect(e)}></input>
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
