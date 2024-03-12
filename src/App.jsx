import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard'
import { useState } from "react";
function App() {
  const[loginStatus,setLoginStatus] = useState(false);
  return (
    <div>
      <Navbar loginStatus={loginStatus} setLoginStatus={setLoginStatus}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login setLoginStatus={setLoginStatus}/>}></Route>
        <Route path="/signup" element={<Signup setLoginStatus={setLoginStatus}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>
    </div>
  )
}

export default App;
