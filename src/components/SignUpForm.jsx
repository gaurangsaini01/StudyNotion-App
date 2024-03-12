import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [showPass, setShowPass] = useState(true);

  function changeHandler(event) {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form>
        {/* first and last name div */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstName}
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formData.lastName}
            />
          </label>
        </div>
        {/* email div */}
        <div>
          <label>
            <p>
              Email <sup>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter E-mail"
              value={formData.email}
            />
          </label>
        </div>
        {/* create and confirm password div */}
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showPass ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Create Password"
              value={formData.password}
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
          </label>
          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPass ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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
          </label>
        </div>
        
      </form>
    </div>
  );
}

export default SignUpForm;
