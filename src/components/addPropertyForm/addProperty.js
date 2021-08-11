import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import InputField from "../../components/input-field/inputField";
import Button from "../../components/button/button";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useSelector } from "react-redux";

const AddPropertyForm = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [formValid, setFormValid] = useState(false);
  const [fieldsValid, setFieldsValid] = useState([]);

  const propertyData = useSelector((state) => state.addProperty);
  const {
    //loading: registerLoading,
    //error: registerError,
    userInfo: propertyInfo,
  } = propertyData;

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
    setData([...array]);
    console.log(props.data);
  }, [location.pathname, props.data.inputFields]);

  //on input change, chhange value in Data state
  const handleChange = (event) => {
    let arr = data.map((entry) => {
      if (entry.name === event.target.name)
        return { name: entry.name, value: event.target.value };
      else return { name: entry.name, value: entry.value };
    });

    setData([...arr]);

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
    location.pathname === "/dashboard" && props.handleAddProperty(data);
  };
  //on Submit success
  useEffect(() => {
    if (propertyInfo && location.pathname == "/dashboard") {
      history.push("/");
    }
  }, [history, propertyInfo, location]);

  useEffect(() => {
    let valid = true;
    fieldsValid.map((entry) => {
      if (entry.valid === false) return (valid = false);
    });
    setFormValid(valid);
  }, [fieldsValid]);

  return (
    <div className="property-form">
      <h3>{props.data.title}</h3>
      <h5>{props.data.subtitle}</h5>
      <form>
        <div className="left">
          <InputField
            variant="0"
            key={props.data.inputFields[0].name}
            data={props.data.inputFields[0]}
            onChange={(e) => handleChange(e)}
          ></InputField>
          <InputField
            variant="1"
            key={props.data.inputFields[3]}
            data={props.data.inputFields[3]}
            onChange={(e) => handleChange(e)}
          ></InputField>
          <InputField
            variant="1"
            key={props.data.inputFields[4]}
            data={props.data.inputFields[4]}
            onChange={(e) => handleChange(e)}
          ></InputField>
          <InputField
            variant="1"
            key={props.data.inputFields[5]}
            data={props.data.inputFields[5]}
            onChange={(e) => handleChange(e)}
          ></InputField>
          <InputField
            variant="1"
            key={props.data.inputFields[6]}
            data={props.data.inputFields[6]}
            onChange={(e) => handleChange(e)}
          ></InputField>
          <InputField
            variant="1"
            key={props.data.inputFields[12].freeCancel}
            data={props.data.inputFields[12]}
            onChange={(e) => handleChange(e)}
          ></InputField>
        </div>
        <div className="right">
          <InputField
            variant="0"
            key={props.data.inputFields[1].propertyType}
            data={props.data.inputFields[1]}
            onChange={(e) => handleChange(e)}
          ></InputField>
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
          {/* {
          <p className="error">
            {loginError ? loginError : registerError ? registerError : ""}
          </p>
        } */}

          {/* {loginLoading || registerLoading ? (
          <Loader />
        ) : (
          <div style={{ width: "75px", height: "75px", margin: "auto" }}></div>
        )} */}
        </div>
      </form>
    </div>
  );
};

export default AddPropertyForm;
