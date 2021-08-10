import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../../components/form/form";
import LoginConstants from "../../constants/login";
import { login } from "./loginAction";
import { useDispatch } from "react-redux";
import Button from "../../components/button/button";
import useMediaQuery from "../../useMediaQuery";

const Login = () => {
  const history = useHistory();
  const mobile = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch();
  return (
    <div className="login">
      {mobile && (
        <Button click={() => history.push("/")} variant="8">
          <i class="fa fa-chevron-left"></i>
        </Button>
      )}
      <div className="left">
        {!mobile && (
          <Button click={() => history.push("/")} variant="8">
            <i class="fa fa-chevron-left"></i>
            Back to Home
          </Button>
        )}
      </div>

      <Form
        handleLogin={(data) => {
          dispatch(login({ email: data[0].value, password: data[1].value }));
          console.log({ email: data[0].value, password: data[1].value });
        }}
        data={LoginConstants}
      ></Form>
    </div>
  );
};

export default Login;
