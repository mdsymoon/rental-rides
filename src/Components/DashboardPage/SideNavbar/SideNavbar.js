import React from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";
import logo from "../../../Images/rental rides.png";
import { AiOutlineHome } from "react-icons/ai";
import {useState , useEffect , useContext} from "react";
import { UserContext } from './../../../App';

const SideNavbar = () => {
    const [isAdmin , setIsAdmin] = useState(false);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:4000/admin', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'} , 
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[loggedInUser.email])
  return (
    <div className="side-nav-bar">
      <img src={logo} alt="" style={{ maxWidth: "170px" }} />
      <div className="mx-2">
        <Link to="/" className="side-nav-link">
          <AiOutlineHome /> Home Page
        </Link>

        <Link to="/dashboard/hiredCar" className="side-nav-link">
          <AiOutlineHome />
          Hired Car
        </Link>

        <Link to="/dashboard/review" className="side-nav-link">
          <AiOutlineHome />
          Review
        </Link>
        {isAdmin && 
        <div>
            <Link to="/dashboard/addAdmin" className="side-nav-link">
          <AiOutlineHome />
          Add Admin
        </Link>
        <Link to="/dashboard/addService" className="side-nav-link">
          <AiOutlineHome /> AddService
        </Link>
        <Link to="/dashboard/userData" className="side-nav-link">
          <AiOutlineHome /> User Data
        </Link>
        </div>
        }
        
      </div>
      <div className="mx-2">
        <h5 style={{color:"goldenRod"}}>Logout</h5>
      </div>
    </div>
  );
};

export default SideNavbar;
