import React, { useState } from "react";

const Register = () => {
  const [validUser, setValidUser] = useState(false);
  const handleSubmit = () => {};
  return (
    <div>
      <div>
        <h1>Register</h1>
        <form action="/register" method="POST">
          <div>
            <label>Name </label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label>Email </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label>Password </label>
            <input type="password" id="password" name="password" />
          </div>
        </form>
        <button type="submit">Register</button>
      </div>
      <a style={{ textDecorationLine: "underline", color: "blue" }}>Login</a>
    </div>
  );
};
export default Register;
