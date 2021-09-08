import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ServiceCard from "./../ServiceCard/ServiceCard";

const OurService = () => {
  const [services, setServices] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setDataLoad(true);
      });
  }, [services]);
  return (
    <div className="our-service">
      <div className="container">
        <h1 className="text-center" style={{ color: "#0285E4" }}>
          Our Service
        </h1>
        <div className="card-container row pt-5">
          <div className="text-center">
          {!dataLoad && (
            <Spinner  animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          </div>
          {services.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
