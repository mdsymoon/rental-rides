import React from 'react';
import './SideNavbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../Images/rental rides.png';
import {AiOutlineHome } from 'react-icons/ai';

const SideNavbar = () => {
    return (
        <div className="side-nav-bar">
            <img src={logo} alt=""  style={{ maxWidth: '170px' }} />
            <div>
                <Link to="/" className="side-nav-link">
                <AiOutlineHome /> Home Page
                </Link>
                <Link to="/dashboard/addService" className="side-nav-link">
                <AiOutlineHome /> AddService
                </Link>
                <Link to="/dashboard" className="side-nav-link">
                <AiOutlineHome />Dashboard
                </Link>
            </div>
            <div>
               <h5>Logout</h5>
            </div>
            
        </div>
    );
};

export default SideNavbar;