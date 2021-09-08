import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [reviews, setReview] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-beach-36227.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setDataLoad(true);
      });
  }, []);
  return (
    <div className="container mb-3">
      <h1 className="text-center p-5" style={{ color: "#0285E4" }}>
        Customer Review
      </h1>
      <div className="customer-review ">
        {!dataLoad && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
