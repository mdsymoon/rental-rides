import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./ReviewCard.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ReviewCard = ({ review }) => {
    useEffect(() => {
        Aos.init({ duration: 1900 })
      })
  return (
    <div  data-aos="flip-up">
      <Card style={{maxWidth: '460px', margin: '10px 0px'}}>
        <Card.Body>
         <div className="d-flex  align-items-center">
         <img src={review.userImg} alt="" style={{width: '40px',height:'40px', borderRadius: '50%'}}/>
          <div >
          <Card.Title style={{color:"#1c3824", marginLeft:'10px'}}>{review.name}</Card.Title>
          <small style={{color:"#32a4a8", marginLeft:'10px'}}>{review.date}</small>
          </div>
         </div>
          
          <p className="mt-3">{review.review}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
