import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ServiceCard from "./../ServiceCard/ServiceCard";

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
    <div className="our-service">
      <div className="container">
        <h1 className="text-center" style={{ color: "#0285E4" }}>
          Our Service
        </h1>
        <div className="card-container row pt-5">
          <div className="text-center">
            {!dataLoad && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
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
