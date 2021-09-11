import React, { useState, useEffect } from "react";
import ServiceCard from "./../ServiceCard/ServiceCard";
import spinnerGif from "../../../Images/Spinner-1s-200px.gif";
const OurService = () => {
  const [services, setServices] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);

  useEffect(() => {
    fetch(`https://peaceful-beach-36227.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setDataLoad(true);
      });
  }, []);
  return (
    <div className="our-service" style={{overflow:"hidden"}}>
      <div className="container">
        <h1 className="text-center" style={{ color: "#0285E4" }}>
          Our Service
        </h1>
        <div className="card-container row pt-5">
          <div className="text-center">
            {!dataLoad && (
              <img src={spinnerGif} alt=""/>
            )}
          </div>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} title={service.title} image={service.img} price={service.price}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
