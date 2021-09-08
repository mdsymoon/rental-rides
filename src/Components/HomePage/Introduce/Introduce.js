import React from "react";
import "./Introduce.css";
import carImage from "../../../Images/1e45e649-xc90t6m-719_0do07b0dm07a000000.png";
import { FiActivity } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdLightbulbOutline } from "react-icons/md";
import { GrClock } from "react-icons/gr";

const Introduce = () => {
  return (
    <div className="py-5 my-5 container">
      <h1 className="introduce-title">What We Offer?</h1>
      <p className="introduce-text">
        It is a long established fact that a reader will be <br /> distracted by
        the readable
        <br />
        content
      </p>
      <div className="pt-5">
        <div className="row ">
          <div className="col-lg-3">
            <div className="">
              <div className="d-flex align-items-center mb-5 justify-content-center">
                <div>
                  <FiActivity className="offer-icon"></FiActivity>
                </div>
                <div>
                  <p className="offer-title">10 Years Experience</p>
                  <p className="offer-text">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center  justify-content-center">
                <div>
                  <FiSettings className="offer-icon"></FiSettings>
                </div>
                <div>
                  <p className="offer-title">Up-to-date Vehicles</p>
                  <p className="offer-text">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center py-4 ">
            <img className="car" src={carImage} alt="" />
          </div>
          <div className="col-lg-3 ">
            <div className="">
              <div className="d-flex align-items-center mb-5  justify-content-center">
                <div>
                  <MdLightbulbOutline className="offer-icon-bulb"></MdLightbulbOutline>
                </div>
                <div>
                  <p className="offer-title">Best Company</p>
                  <p className="offer-text">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center  justify-content-center">
                <div>
                  <GrClock className="offer-icon"></GrClock>
                </div>
                <div>
                  <p className="offer-title">Smooth Ride</p>
                  <p className="offer-text">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
