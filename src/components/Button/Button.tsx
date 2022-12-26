import React from "react";
import { ButtonProps } from "../../types/components/Button.types";
import "../../styles/components/Button/Button.css";

const Button = ({
  label,
  onClick,
  icon,
  isSecondary,
  isDisabled,
  styles,
}: ButtonProps): React.ReactElement => {
  return (
    <div
      className="button_container"
      style={styles}
      onClick={onClick}
      id={isSecondary ? "secondary" : "primary"}
    >
      <div className="button_icon">{icon}</div>
      <div className="button_inner_container">
        <p>{label} </p>
      </div>
    </div>
  );
};

export default Button;
