import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar-wrapper">
      <div
        className="progress-bar"
        aria-valuenow={props.progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: props.progress + "%" }}
      ></div>
      <span style={{ left: props.progress - 10 + "%" }}>{props.progress}%</span>
      {props.counter && <span>Uploaded: {props.counter} Image(s)</span>}
    </div>
  );
};
export default ProgressBar;
