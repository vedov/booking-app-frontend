import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import InputField from "../../components/input-field/inputField";
import Button from "../../components/button/button";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useSelector } from "react-redux";
import SelectField from "../../components/select-field/selectField";
import ReactChipInput from "react-chip-input";
import Map from "../Map/Map";

const AddPropertyForm = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [formValid, setFormValid] = useState(false);
  const [fieldsValid, setFieldsValid] = useState([]);
  const [mapLocation, setMapLocation] = useState([]);
  const propertyData = useSelector((state) => state.addProperty);
  const [selectValue, setSelectValue] = useState("Lodge");

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
    data[1].value = selectValue;
    data[2].value = data[2].value.split(",");
    data[3].value = data[3].value.split(",");
    console.log("samke", mapLocation);
    data[9].value = mapLocation[0];
    data[10].value = mapLocation[1];
    data[11].value = mapLocation[2];
    data[12].value = mapLocation[3];
    data[13].value = mapLocation[4];
    data[14].value = mapLocation[5];
    data[16].value = true;
    console.log(data);
    location.pathname === "/dashboard" && props.handleAddProperty(data);
  };

  //on Submit success
  useEffect(() => {
    if (propertyInfo && location.pathname == "/dashboard") {
      history.push("/");
    }
  }, [history, propertyInfo, location]);
  const property = props.data.inputFields;

  return (
    <div className="property-form">
      <h3>{props.data.title}</h3>
      <h5>{props.data.subtitle}</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {props.data.inputFields && (
          <div className="columns">
            <div className="col-1">
              <InputField
                variant="0"
                key={property[0].name}
                data={property[0]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <SelectField
                variant="0"
                key={property[1].name}
                data={property[1]}
                setSelectValue={setSelectValue}
              ></SelectField>

              <InputField
                variant="0"
                key={property[2].name}
                data={property[2]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[3].name}
                data={property[3]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[15].name}
                data={property[15]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[16].name}
                data={property[16]}
                onChange={(e) => handleChange(e)}
              ></InputField>
            </div>
            <div className="col-2">
              <InputField
                variant="0"
                key={property[4].name}
                data={property[4]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[5].name}
                data={property[5]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[6].name}
                data={property[6]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[7].name}
                data={property[7]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[8].name}
                data={property[8]}
                onChange={(e) => handleChange(e)}
              ></InputField>
            </div>
            <Map setMapLocation={setMapLocation}></Map>
            {/* <div className="col-3">
              //ADRESS 
              <InputField
                variant="0"
                key={property[9].name}
                data={property[9]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[10].name}
                data={property[10]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[11].name}
                data={property[11]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[12].name}
                data={property[12]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[13].name}
                data={property[13]}
                onChange={(e) => handleChange(e)}
              ></InputField>
              <InputField
                variant="0"
                key={property[14].name}
                data={property[14]}
                onChange={(e) => handleChange(e)}
              ></InputField>
            </div> */}
          </div>
        )}
        <Button
          variant="2"
          type="button"
          customStyle={{
            width: "75%",
            margin: "auto",
            marginTop: "15px",
          }}
          click={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {props.data.buttonContent}
        </Button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
