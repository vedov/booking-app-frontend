import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "./registerAction";
import useMediaQuery from "../../useMediaQuery";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import UserRegisterForm from "../../constants/register";

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const mobile = useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState(
    location.pathname === "/register" && UserRegisterForm
  );
  useEffect(() => {
    if (location.pathname === "/register") {
      setData(UserRegisterForm);
    }
  }, [location.pathname]);
  return (
    <div className="register">
      {mobile && (
        <Button click={() => history.push("/")} variant="8">
          <i class="fa fa-chevron-left"></i>
        </Button>
      )}
      <div className="left">
        {!mobile && (
          <Button click={() => history.push("/")} variant="8">
            <i class="fa fa-chevron-left"></i>
            Back to home
          </Button>
        )}
        {/* <img src={data.image} alt=""></img> */}
      </div>
      <Form
        handleRegister={(userData) => {
          dispatch(
            register({
              fullName: userData[0].value + userData[1].value,
              email: userData[2].value,
              password: userData[3].value,
              password2: userData[4].value,
            })
          );
        }}
        data={data}
      ></Form>
    </div>
  );
};

export default Register;
