import { useState } from "react";
import "./App.css";

//components
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: " Username",
      errorMessage: "",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: " Email",
      errorMessage: "",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: " birthday",
      errorMessage: "",
      label: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: " password",
      errorMessage: "",
      label: "password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: " confirmPassword",
      errorMessage: "",
      label: "confirmPassword",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
