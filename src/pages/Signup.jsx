import React from "react";
import Template from "../components/Template";
import signupImage from "../assets/signup.png";

function Signup({setLoginStatus}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for Free"
      desc1="Build skills for today, tomorrow and beyond !"
      desc2="Education to future proof your career !"
      image={signupImage}
      formType="signup"
      setLoginStatus={setLoginStatus}
    ></Template>
  );
}

export default Signup;
