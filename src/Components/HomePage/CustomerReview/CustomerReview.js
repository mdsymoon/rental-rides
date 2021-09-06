import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews , setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/review')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
    })
    return (
        <div className="container">
            <h1 className="text-center p-5" style={{color:'#11e6ed'}}>Customer  Review</h1>
            <div className="customer-review ">
                {
                    reviews.map((review) => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;