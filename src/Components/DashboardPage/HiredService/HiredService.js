import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";

import { UserContext } from "../../../App";
import HiredCar from "./../HiredCar/HiredCar";
import spinnerGif from "../../../Images/Spinner-1s-200px.gif";

const HiredService = () => {
  const [hired, setHired] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  const [dataLoad, setDataLoad] = useState(false);

  useEffect(() => {
    fetch(`https://peaceful-beach-36227.herokuapp.com/hiredCar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setHired(data);
        setDataLoad(true);
      });
  });
  return (
    <div className="mt-5">
      
      <div className="row container" style={{ margin: "auto"  }}>
      <h1 >My Hired Car</h1>
      {
        !hired.length && <h3 className="text-center text-danger mt-5">NO ORDERS YET!</h3>
      }
        <div className="text-center mt-4">
          {!dataLoad && (
            <img src={spinnerGif} alt=""/>
          )}
        </div>
        
        {hired.map((hire) => (
          <HiredCar key={hire._id} hire={hire}></HiredCar>
        ))}
        
      </div>
    </div>
  );
};

export default HiredService;
