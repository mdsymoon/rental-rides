import React, { useEffect, useState } from "react";

import ReviewCard from "../ReviewCard/ReviewCard";
import "./CustomerReview.css";
import spinnerGif from "../../../Images/Spinner-1s-200px.gif";
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
          <img src={spinnerGif} alt=""/>
        )}
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
