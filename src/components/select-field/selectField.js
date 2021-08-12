import React from "react";

const SelectField = (props) => {
  const data = props.data || {};

  return (
    <div
      className={`${props.variant === "1" && "half"} ${
        props.variant === "0" && "select-field"
      }`}
    >
      {data.label ? <label>{data.label}</label> : null}
      <select name={data.name}>
        <option value="lodge">Lodge</option>
        <option value="apartment">Apartment</option>
      </select>
    </div>
  );
};

export default SelectField;
