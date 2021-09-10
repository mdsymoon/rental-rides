import React from "react";
import './HiredCar.css';
import { Badge, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const HiredCar = ({ hire }) => {
  const history = useHistory();
  const handleCancel = (_id) => {
    fetch('https://peaceful-beach-36227.herokuapp.com/deleteHired', {
      method: 'DELETE' , 
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({_id})
    })
    .then(res => res.json())
    .then(data => {
      
    })
    history.push('/dashboard/CancelRide')
  }

  
  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center my-5 " >
      <Card style={{ width: "20rem"}}>
        <Card.Img
          variant="top"
          src={`data:image/png;base64,${hire.image?.img}`}
        />
        <Card.Body>
          <div className="d-flex justify-content-between justify-content-center">
            <Card.Title>{hire.title}</Card.Title>
            <h5 className="service-price">${hire.price}/day</h5>
          </div>
          <div className="d-flex justify-content-between">
          <p style={{color:"goldenRod"}}>Hired Date : { hire.orderDate}</p>
          <h6>
          {
          (hire.orderStatus === 'Hired') && <Badge  bg="danger">{hire.orderStatus}</Badge>
        }
        {
          (hire.orderStatus === 'On The Way') && <Badge  bg="warning" style={{color:"black"}}>{hire.orderStatus}</Badge>
        }
        {
          (hire.orderStatus === 'Complete') && <Badge  bg="success">{hire.orderStatus}</Badge>
        }
          </h6>
          </div>

          {(hire.orderStatus === "Hired") && <button className="cancel-button" onClick={()=>  handleCancel(hire._id) } >Cancel</button>}
          
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default HiredCar;
