import React from "react";

import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      <input name={props.name} placeholder={props.placeholder} type="text" />
    </div>
  );
};

export default FormInput;
