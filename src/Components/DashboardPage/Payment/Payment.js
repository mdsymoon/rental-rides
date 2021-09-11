import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard";

const stripePromise = loadStripe(
  "pk_test_51JQ4prEm3hqKl9sXPPOb7mmx8zdmO04r1xLjEYTNFcQ9zNULfs7rwybhWjGuVbg08jEDkRQP89pBniPJFTvMJynw009zQ6vwkD"
);

const Payment = () => {

    
  return (
    <div className="container mt-5">
        <h1 className="mb-5 text-primary">Please Payment  </h1>
        <Elements stripe={stripePromise} >
       <PaymentCard></PaymentCard>
    </Elements>
    </div>
        
    
  );
};

export default Payment;
