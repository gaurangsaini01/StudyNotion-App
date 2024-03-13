import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

function Navbar({loginStatus,setLoginStatus}) {
  return (
    <div className="flex text-white justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} alt="logo" width="160px" height="32px" loading="lazy" />
      </Link>
      <nav>
        <ul className="flex  gap-6">
          <li className="hover:text-blue-100 transiontion-all duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-100 transiontion-all duration-300 ease-in-out">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-100 transiontion-all duration-300 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className=" gap-4 flex items-center ">
        { !loginStatus &&
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-800">Login</button>
          </Link>
        }
        {   !loginStatus &&
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-800">Signup</button>
          </Link>
        }
        {   loginStatus &&
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-800" onClick={()=>{
                setLoginStatus(false);
                toast.success('Logged Out');
            }}>Logout</button>
          </Link>
        }
        {   loginStatus &&
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-800">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
