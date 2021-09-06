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
    <div  data-aos="flip-up" >
      <Card style={{maxWidth: '460px', margin: '10px 0px'}}>
        <Card.Body>
          <img src={review.userImg} alt=""/>
          <Card.Title style={{color:"#1c3824"}}>{review.name}</Card.Title>
          <small>{review.date}</small>
          <p>{review.review}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
