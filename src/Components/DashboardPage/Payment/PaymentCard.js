import React, { useState , useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { serviceContext } from "../../../App";


const PaymentCard = () => {
  const history = useHistory();
  const [selectedService , ] = useContext(serviceContext);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      history.push('/dashboard/hiredCar')
    }
    
    
  };

  

   
  return (
      <div>
    <form onSubmit={handleSubmit}>
      <CardElement />
      {
        paymentError && <p style ={{color: 'red'}}>{paymentError}</p>
    }
    {
        paymentSuccess && <p style ={{color: 'green'}}>Your payment is successful.</p>
    }
    <p style ={{color: 'goldenRod'}}>You need to payment {selectedService.price}</p>
      <button
        type="submit"
        disabled={!stripe}
        
        className="mt-4" 
      >
        Pay
      </button>
    </form>
    
    </div>
  );
};

export default PaymentCard;
