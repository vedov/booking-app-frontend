import axios from "axios";
import jwtDecode from "jwt-decode";

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/inputField";
import ProgressBar from "../progressBar/progressBar";
const UserInfoForm = (props) => {
  const userID = jwtDecode(localStorage.getItem("token")).user.id;
  const userInfo = props.userInfo;
  const [fullName, setFullName] = useState(userInfo.fullName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  /*   const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState(); */
  const [email, setEmail] = useState(userInfo.email);
  const [profileImage, setProfileImage] = useState();
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const editUserInfo = async () => {
    return await axios
      .patch(process.env.REACT_APP_BACKEND_URL + `/user/${userID}`, {
        fullName: fullName,
        userImage: profileImage,
        phoneNumber: phoneNumber,
        email: email,
      })
      .then((res) => {
        console.log(res.data.user);
      });
  };

  const handleImageSelect = async (event) => {
    setUploading(true);
    console.log(uploading);
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "f9k4o6vj");
    formData.append("api_key", "236325287598512");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/dl84dqtbq/image/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.lengthComputable) {
              let percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              console.log(percentCompleted);
              setUploadProgress(percentCompleted);
            }
          },
        }
      )
      .then((res) => {
        setProfileImage(res.data.secure_url);
      });
  };
  useEffect(() => {}, []);

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
          <div className="field">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="123-45-678-910"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="image-input">
            <label>Upload a Profile Image</label>
            <input type="file" onChange={(e) => handleImageSelect(e)}></input>
            {uploading && uploading ? (
              <ProgressBar progress={uploadProgress}></ProgressBar>
            ) : null}
          </div>
        </form>
      )}
    </>
  );
};

export default UserInfoForm;
