import React from "react";

const Button = ({
  arrow,
  customStyle,
  click,
  disabled,
  type,
  variant,
  children,
}) => {
  return (
    <button
      style={customStyle}
      onClick={click}
      disabled={disabled}
      type={type ? type : "submit"}
      className={
        (disabled && variant === "1" && "disabled-blue-button") ||
        (variant === "1" && "white-button") ||
        (variant === "2" && "yellow-button") ||
        (variant === "3" && "text-button") ||
        (variant === "4" && "blue-outline-button") ||
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
      {arrow ? <i class="fa fa-chevron-right"></i> : null}
    </button>
  );
};

export default Button;
