import React from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";
import logo from "../../../Images/rental rides.png";
import { IoIosHome } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { HiReceiptRefund } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { RiMailStarLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import { UserContext } from "./../../../App";

const SideNavbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    fetch("https://peaceful-beach-36227.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  const handleLogout = () => {
    setLoggedInUser({});
    history.push("/");
  };

  return (
    <div className="side-nav-bar">
      <img src={logo} alt="" style={{ maxWidth: "170px" }} />
      <div className="mx-2">
        <Link to="/" className="side-nav-link ">
          <IoIosHome /> Home Page
        </Link>

        <Link to="/dashboard/hiredCar" className="side-nav-link">
          <HiReceiptRefund /> Hired Car
        </Link>

        <Link to="/dashboard/review" className="side-nav-link">
          <MdRateReview /> Review
        </Link>
        {isAdmin && (
          <div>
            <Link to="/dashboard/addAdmin" className="side-nav-link">
              <IoMdPersonAdd /> Add Admin
            </Link>
            <Link to="/dashboard/addService" className="side-nav-link">
              <AiOutlineAppstoreAdd /> AddService
            </Link>
            <Link to="/dashboard/mail" className="side-nav-link">
              <RiMailStarLine /> Mail Box
            </Link>
            <Link to="/dashboard/userData" className="side-nav-link">
              <ImDatabase /> All Orders
            </Link>
          </div>
        )}
      </div>
      <div className="mx-2">
        <h5
          style={{ color: "goldenRod", cursor: "pointer" }}
          onClick={handleLogout}
        >
          <BiLogOut/> Logout{" "}
        </h5>
      </div>
    </div>
  );
};

export default SideNavbar;
