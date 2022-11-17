import React from "react";

import "./formInput.css";

const FormInput = (props) => {
  const { label, handleChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input {...inputProps} onChange={handleChange} />
    </div>
  );
};

export default FormInput;
