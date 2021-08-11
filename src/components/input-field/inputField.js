import React from "react";

const InputField = (props) => {
  const data = props.data || {};

  return (
    <div
      className={`${props.variant === "1" && "half"} ${
        props.variant === "0" && "input-field"
      }`}
    >
      {data.label ? <label>{data.label}</label> : null}
      <input
        onChange={(e) => props.onChange(e)}
        type={data.type || "text" || "checkbox"}
        name={data.name || ""}
        placeholder={data.placeholder || ""}
      ></input>
    </div>
  );
};

export default InputField;
