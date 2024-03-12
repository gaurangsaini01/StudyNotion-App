import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png";

function Login({setLoginStatus}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow and beyond !"
      desc2="Education to future proof your career !"
      image={loginImage}
      formType="login"
      setLoginStatus={setLoginStatus}
    ></Template>
  );
}

export default Login;
