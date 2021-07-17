import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import InputField from "../../components/input-field/inputField";
import Button from "../../components/button/button";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useSelector } from "react-redux";

const Form = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [formValid, setFormValid] = useState(false);
  const [fieldsValid, setFieldsValid] = useState([]);
  const [terms, setTerms] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  //const loginData = useSelector((state) => state.login);
  /* const {
    loading: loginLoading,
    error: loginError,
    userInfo: loginInfo,
  } = loginData; */

  /* const registerData = useSelector((state) => state.register);
  const {
    loading: registerLoading,
    error: registerError,
    userInfo: registerInfo,
  } = registerData; */

  //set initial validation to false
  useEffect(() => {
    let array = [];
    props.data.inputFields.map(
      (entry) =>
        (array = [...array, { name: entry.name, valid: !entry.required }])
    );

    setFieldsValid([...array]);
  }, [props.data.inputFields]);

  //initial setting user data to empty values
  useEffect(() => {
    let array = [];
    props.data.inputFields.map(
      (entry) => (array = [...array, { name: entry.name, value: "" }]),
      []
    );
    if (location.pathname === "/login") {
      setPassMatch(true);
      setTerms(true);
    } else setPassMatch(array[3].value === array[4].value);

    setData([...array]);
  }, [location.pathname, props.data.inputFields]);

  //on input change, chhange value in Data state
  const handleChange = (event) => {
    let arr = data.map((entry) => {
      if (entry.name === event.target.name)
        return { name: entry.name, value: event.target.value };
      else return { name: entry.name, value: entry.value };
    });
    setData([...arr]);
    if (location.pathname !== "/login")
      setPassMatch(arr[3].value === arr[4].value);
    let array = [];
    array = arr.map((entry) => {
      if (entry.value !== "") {
        return { name: entry.name, valid: true };
      } else return { name: entry.name, valid: false };
    });
    setFieldsValid([...array]);
  };
  //on submit
  const handleSubmit = () => {
    (location.pathname === "/register-user" ||
      location.pathname === "/register-doctor") &&
      props.handleRegister(data);
    location.pathname === "/login" && props.handleLogin(data);
  };
  //on Submit success
  /* useEffect(() => {
    let role;
    if (loginInfo) {
      role = jwtDecode(loginInfo && loginInfo.token);
      role = role.user.role;
      if (role === 0) history.push("/patient-dashboard/my-dashboard");
      else if (role === 1) history.push("/admin-dashboard/my-dashboard");
      else if (role === 2) history.push("/doctor-dashboard/my-dashboard");
    }
    if (registerInfo && location.pathname !== "/login") {
      if ((location.pathname = "/register-user"))
        history.push("/register-user/complete");
      if ((location.pathname = "/register-doctor"))
        history.push("/register-doctor/complete");
    }
  }, [loginData, registerData, history, loginInfo, registerInfo, location]); */

  useEffect(() => {
    let valid = true;
    fieldsValid.map(
      (entry) => {
        if (entry.valid === false || !passMatch || !terms)
          return (valid = false);
      },
      [passMatch, terms]
    );
    setFormValid(valid);
  }, [fieldsValid, passMatch, terms]);

  return (
    <div className="register-form">
      <h3>{props.data.title}</h3>
      <h5>{props.data.subtitle}</h5>
      <form>
        {props.data.inputFields.map((entry, index) => {
          return (
            <InputField
              variant={
                (location.pathname === "/login" && "0") ||
                (index === 2 && "0") ||
                (index === 5 && "0") ||
                "1"
              }
              key={entry.name}
              data={entry}
              onChange={(e) => handleChange(e)}
            ></InputField>
          );
        })}
        {location.pathname !== "/login" && (
          <label className="accept-terms">
            <input
              type="checkbox"
              checked={terms}
              onClick={() => setTerms(!terms)}
            ></input>
            I Agree to Bookers
            <a href="/"> Terms Of Service</a> and <a href="/">Privacy Policy</a>
          </label>
        )}
        <br></br>
        <Button
          variant="2"
          disabled={!formValid}
          type="submit"
          customStyle={{ width: "75%", margin: "auto", marginTop: "15px" }}
          click={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {props.data.buttonContent}
        </Button>

        {/* Content */}
        {props.data.content ? (
          <p>
            {props.data.content[0]}
            <Link to={props.data.content[2]}> {props.data.content[1]}</Link>
          </p>
        ) : null}
        {/* <p className="error">
          {loginError ? loginError : registerError ? registerError : ""}
        </p> */}

        {/* {loginLoading || registerLoading ? (
          <Loader />
        ) : (
          <div style={{ width: "75px", height: "75px", margin: "auto" }}></div>
        )} */}
      </form>
    </div>
  );
};

export default Form;
