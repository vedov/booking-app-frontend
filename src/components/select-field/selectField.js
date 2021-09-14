import React, { useState, useEffect } from "react";
import axios from "axios";
const SelectField = (props) => {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const handleChange = (e) => {
    props.setSelectValue(e.target.value);
  };

  const getPropertyTypes = async () => {
    return await axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          `/property/create-new?secret_token=` +
          localStorage.getItem("token")
      )
      .then((res) => {
        setPropertyTypes(res.data.types);
      });
  };

  useEffect(async () => {
    await getPropertyTypes();
  });

  return (
    <div className="select-field">
      <label>Property Type</label>
      <select name="Property Type" onChange={handleChange}>
        {propertyTypes &&
          propertyTypes.map((entry, index) => {
            return (
              <option value={entry.name} key={index}>
                {entry.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectField;
