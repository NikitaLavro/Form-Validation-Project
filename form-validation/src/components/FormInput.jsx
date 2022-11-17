import React from "react";

import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, handleChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input {...inputProps} onChange={handleChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
