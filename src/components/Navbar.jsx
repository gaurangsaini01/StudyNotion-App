import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

function Navbar({loginStatus,setLoginStatus}) {
  return (
    <div className="flex bg-black justify-evenly">
      <Link to="/">
        <img src={Logo} alt="logo" width="160px" height="32px" loading="lazy" />
      </Link>
      <nav>
        <ul className="flex text-white gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="text-white gap-4 flex">
        { !loginStatus &&
          <Link to="/login">
            <button>Login</button>
          </Link>
        }
        {   !loginStatus &&
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        }
        {   loginStatus &&
          <Link to="/login">
            <button onClick={()=>{
                setLoginStatus(false);
                toast.success('Logged Out');
            }}>Logout</button>
          </Link>
        }
        {   loginStatus &&
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
