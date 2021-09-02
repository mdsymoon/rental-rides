import React from 'react';
import "./Circle.css";
import {RiArrowLeftRightFill} from "react-icons/ri"

const Circle = () => {
    return (
        <div>
            <h1 className="text-center" style={{color:"#2285E4"}}>Why Choose Us</h1>
            <div className="p-5">
                <h5  className="circle">Creative <br/> Design</h5>
            </div>
            <div className="d-flex  justify-content-center align-items-center">
                <div className="mb-5"><h5 className="circle">Service <br/> Center</h5></div>
                <RiArrowLeftRightFill className="arrow-icon"/>
                <div className="mb-5"><h5 className="circle">Smooth <br/> Ride</h5></div>
            </div>
        </div>
    );
};

export default Circle;