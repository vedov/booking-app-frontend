import React from "react";

const Button = ({
  arrow,
  customStyle,
  click,
  disabled,
  type,
  variant,
  children,
  icon,
}) => {
  return (
    <button
      style={customStyle}
      onClick={click}
      disabled={disabled}
      type={type ? type : "submit"}
      className={
        (variant === "1" && "white-button") ||
        (variant === "2" && "yellow-button") ||
        (variant === "3" && "text-button") ||
        (variant === "4" && "disabled-button") ||
        (variant === "5" && "white-blob-button") ||
        (variant === "6" && "blue-blob-button") ||
        (variant === "7" && "blue-slide-button") ||
        (variant === "8" && "back-home-button") ||
        (variant === "9" && "fragment-back-button") ||
        (variant === "10" && "button-404") ||
        (variant === "contact" && "blue-contact-button") ||
        ""
      }
    >
      <span>{children}</span>
      {arrow ? <i className="fa fa-chevron-right"></i> : null}
      {icon ? <i className={icon}></i> : null}
    </button>
  );
};

export default Button;
