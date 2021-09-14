import React, { useEffect, useState } from "react";
import InputField from "../../components/input-field/inputField";
import Button from "../../components/button/button";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import SelectField from "../../components/select-field/selectField";
import Map from "../Map/Map";
import CheckField from "../checkField/checkField";
import ProgressBar from "../progressBar/progressBar";

const AddPropertyForm = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [formValid, setFormValid] = useState(false);
  const [fieldsValid, setFieldsValid] = useState([]);
  const [mapLocation, setMapLocation] = useState([]);
  const propertyData = useSelector((state) => state.addProperty);
  const [selectValue, setSelectValue] = useState("Lodge");
  const [amenities, setAmenities] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadCounter, setUploadCounter] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  const property = props.data.inputFields;
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
    array[16].value = false;
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

  const handleCheck = (event) => {
    data[16].value = event.target.checked;
  };

  const handleImageSelect = async (event) => {
    let array = [];
    for (let i = 0; i < event.target.files.length; i++) {
      setUploading(true);
      console.log(i, uploading);
      const formData = new FormData();
      formData.append("file", event.target.files[i]);
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
                setUploadCounter(i + 1);
              }
            },
          }
        )
        .then((res) => {
          console.log("gurnuo");
          console.log(res.data);
          array.push(res.data.secure_url);
          console.log(uploadCounter, res.data.secure_url);
        });
    }
    setPropertyImages(array);
    setUploaded(true);
  };

  //on submit
  const handleSubmit = () => {
    data[1].value = selectValue;
    data[2].value = amenities;
    data[3].value = propertyImages;
    data[9].value = mapLocation[0];
    data[10].value = mapLocation[1];
    data[11].value = mapLocation[2];
    data[12].value = mapLocation[3];
    data[13].value = mapLocation[4];
    data[14].value = mapLocation[5];
    console.log(data);

    if (location.pathname === "/dashboard") props.handleAddProperty(data);
    /*props.setCreateProperty(false);*/
  };

  //on Submit success

  useEffect(() => {
    if (propertyInfo && location.pathname == "/dashboard") {
      history.push("/");
    } else history.push("/dashboard/settings");
  }, [history, propertyInfo, location]);

  return (
    <div className="property-form">
      <Button
        variant="2"
        click={() => props.setCreateProperty(false)}
        customStyle={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          borderRadius: "10px",
        }}
      >
        Back
      </Button>
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
              <SelectField setSelectValue={setSelectValue}></SelectField>
              <label>Amenities</label>
              <div className="amenities-checkboxes">
                <CheckField
                  key={property[2].name}
                  data={property[12]}
                  selectedAmenities={amenities}
                ></CheckField>
              </div>
              <div className="image-input">
                <label>Images</label>
                <input
                  type="file"
                  onChange={(e) => handleImageSelect(e)}
                  multiple
                ></input>
                {uploading && uploading ? (
                  <ProgressBar
                    progress={uploadProgress}
                    counter={uploadCounter}
                  ></ProgressBar>
                ) : null}
              </div>
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
                onChange={(e) => handleCheck(e)}
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
              <Button
                variant={uploaded ? "2" : "4"}
                type="button"
                customStyle={{
                  margin: "10px 0",
                  padding: "10px",
                  width: "100%",
                }}
                click={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {props.data.buttonContent}
              </Button>
            </div>

            <div className="map">
              <label>Location</label>
              <Map setMapLocation={setMapLocation}></Map>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddPropertyForm;
