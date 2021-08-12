import React, { useState } from "react";

const SelectField = (props) => {
  const data = props.data || {};
  const handleChange = (e) => {
    props.setSelectValue(e.target.value);
  };
  return (
    <div
      className={`${props.variant === "1" && "half"} ${
        props.variant === "0" && "select-field"
      }`}
    >
      {data.label ? <label>{data.label}</label> : null}
      <select name={data.name} onChange={handleChange}>
        <option value="Lodge">Lodge</option>
        <option value="Apartment">Apartment</option>
      </select>
    </div>
  );
};

export default SelectField;
