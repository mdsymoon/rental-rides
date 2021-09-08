import React from "react";
import { Card } from "react-bootstrap";

const HiredCar = ({ hire }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center my-5 " >
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={`data:image/png;base64,${hire.img.img}`}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{hire.title}</Card.Title>
            <h5 className="service-price">${hire.price}/day</h5>
          </div>
          <p style={{color:"goldenRod"}}>Hired Date : { hire.orderDate}</p>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default HiredCar;
