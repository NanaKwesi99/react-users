import React from "react";
import { useDispatch } from "react-redux";
import { registerUserWithEmail } from "../action/authActions";

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(registerUserWithEmail(email, password));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <hr />
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;