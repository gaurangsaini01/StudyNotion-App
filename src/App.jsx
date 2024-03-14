import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className=" w-screen min-h-[100vh] bg-richblack-900 flex flex-col">
      <Navbar
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
      ></Navbar>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/login"
          element={<Login setLoginStatus={setLoginStatus} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup setLoginStatus={setLoginStatus} />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute loginStatus={loginStatus}>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        
      </Routes>
    </div>
  );
}

export default App;
