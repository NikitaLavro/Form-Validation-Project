import React from "react";
import { useState } from "react";

import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, handleChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
