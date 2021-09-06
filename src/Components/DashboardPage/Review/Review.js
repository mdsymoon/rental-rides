import React, { useContext } from "react";
import "./Review.css";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { UserContext } from './../../../App';

const Review = () => {
  const [loggedInUser , setLoggedInUser] = useContext(UserContext);
  
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    data.date = new Date().toDateString();
    data.userImg = loggedInUser.userImg;

  fetch('http://localhost:4000/addReview' , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    history.push('/')
  })
  } ;

  console.log(watch("example"));
  return (
    <div className="dashboard-form  mt-5 ">
        <h1>Give a review about our service</h1>
        <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
            <input className="form-control" placeholder="Your Name"{...register("name", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">title is required</p>}
            </div>
            <div className="form-group mb-3">
            <textarea as="textarea" rows={3} className="form-control" placeholder="What You Think About Us..." {...register("review", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">title is required</p>}
            </div>
            
            <input className="form-button" type="submit" />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
