import React, { useContext, useEffect } from "react";
import './ServiceCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Card } from "react-bootstrap";
import { serviceContext } from "../../../App";
import { useHistory } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const [, setSelectedService] = useContext(serviceContext);
  const history = useHistory();
  const selectedCard =() => {
    setSelectedService(service);
    history.push('/dashboard/hire');
  }
    useEffect(() => {
        Aos.init({ duration: 1900 })
      })
  return (
    <div data-aos="flip-up" className=" col-lg-4 col-md-6 d-flex justify-content-center mb-5" onClick={selectedCard}>
      
        <Card className="serviceCard" >
        <Card.Img
          variant="top"
          src={`data:image/png;base64,${service.img.img}`}
        />
        <Card.Body>
         <div className="d-flex justify-content-between">
         <Card.Title>{service.title}</Card.Title>
         <h5 className="service-price">${service.price}/day</h5>
         </div>
        </Card.Body>
      </Card>
        
    </div>
  );
};

export default ServiceCard;
