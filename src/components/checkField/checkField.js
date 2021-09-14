import React, { useEffect, useState } from "react";
import axios from "axios";
const CheckField = (props) => {
  const [amenities, setAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const data = props.data || {};
  let array = [];
  const handleChange = (e) => {
    const index = e.target.index;
    const checked = e.target.checked;

    const checkedValue = e.target.value;

    const checkedName = e.target.name;
    console.log(checkedName);
    array.push(checkedName);
    setSelectedAmenities(array);
    props.setAmenities(selectedAmenities);
    if (checked) props.selectedAmenities.splice(index, 0, checkedName);
    else props.selectedAmenities.splice(index, 1);
  };

  const getAmenities = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          `/property/create-new?secret_token=` +
          localStorage.getItem("token")
      )
      .then((res) => {
        setAmenities(res.data.amenities);
      });
  };

  useEffect(() => {
    getAmenities();
  });

  return (
    <div className="check-field">
      {amenities &&
        amenities.map((entry, index) => {
          return (
            <div key={props.name}>
              <input
                type="checkbox"
                id={entry.name}
                name={entry.name}
                onChange={(e) => handleChange(e)}
              ></input>
              <label>{entry.name}</label>
            </div>
          );
        })}
    </div>
  );
};

export default CheckField;
