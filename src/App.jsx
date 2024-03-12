import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Login from "./pages/Login";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/signup" element={<Signup/>}> </Route>
        <Route path="/dashboard" element={<Dashboard/>}> </Route>

      </Routes>
    </div>
  )
}

export default App;
