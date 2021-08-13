import React, { useEffect, useState } from "react";

const CheckField = (props) => {
  const data = props.data || {};
  const handleChange = (e) => {
    const index = e.target.index;
    const checked = e.target.checked;

    const checkedValue = e.target.value;

    const checkedName = e.target.name;
    if (checked) props.amenities.splice(index, 0, checkedName);
    else props.amenities.splice(index, 1);
  };

  return (
    <div
      className={`${props.variant === "1" && "half"} ${
        props.variant === "0" && "check-field"
      }`}
    >
      <div>
        <input
          type="checkbox"
          id="kitchen"
          name="kitchen"
          onChange={(e) => handleChange(e)}
          index="0"
        ></input>
        <label for="kitchen">Kitchen</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="wifi"
          name="wifi"
          index="1"
          onChange={(e) => handleChange(e)}
        ></input>
        <label for="wifi">Wi-Fi</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="parking"
          name="parking"
          index="2"
          onChange={(e) => handleChange(e)}
        ></input>
        <label for="parking">Free Parking</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="balcony"
          name="balcony"
          index="3"
          onChange={(e) => handleChange(e)}
        ></input>
        <label for="balcony">Balcony</label>
      </div>
    </div>
  );
};

export default CheckField;
