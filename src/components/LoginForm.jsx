import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(true);
  function changeHandler(event) {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  return (
    <form>
      <label htmlFor="email">
        <p>
          Email Address <sup>*</sup>{" "}
        </p>
      </label>
      <input
        required
        type="email"
        onChange={changeHandler}
        placeholder="Enter e-mail id"
        value={formData.email}
        id="email"
        name="email"
      />
      <label htmlFor="password"></label>
      <input
        required
        type={showPass ? "text" : "password"}
        onChange={changeHandler}
        placeholder="Enter Password"
        value={formData.password}
        id="password"
        name="password"
      />
      <span
        onClick={() => {
          setShowPass((prev) => !prev);
        }}
      >
        {showPass ? (
          <AiOutlineEye></AiOutlineEye>
        ) : (
          <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
        )}
      </span>
      <p>Forgot Password</p>
    </form>
  );
}

export default LoginForm;
