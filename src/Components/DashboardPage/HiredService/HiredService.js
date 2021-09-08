import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../../App";
import HiredCar from "./../HiredCar/HiredCar";

const HiredService = () => {
  const [hired, setHired] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [dataLoad, setDataLoad] = useState(false);

  // useEffect(() => {
  //     fetch('http://localhost:4000/hiredCar')
  //     .then(res => res.json())
  //     .then(data => {
  //         setHired(data);

  //     },[])
  // })

  useEffect(() => {
    fetch(`http://localhost:4000/hiredCar`, {
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
      <h1 style={{ color: "#0285E4" }}>My Hired Car</h1>
      <div className="row container" style={{ margin: "auto" }}>
        <div className="text-center mt-5">
          {!dataLoad && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
        {hired.map((hire) => (
          <HiredCar hire={hire}></HiredCar>
        ))}
      </div>
    </div>
  );
};

export default HiredService;
