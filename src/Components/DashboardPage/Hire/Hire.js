import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { serviceContext, UserContext } from '../../../App';




const Hire = () => {
    const {register, handleSubmit,formState: { errors },} = useForm();
    const [selectedService , setSelectedService] = useContext(serviceContext);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    const onSubmit = (data) => {
         
    
      const orderData = {
        data,
        selectedService,
         orderDate: new Date().toDateString()
      }
      
    
    fetch('http://localhost:4000/hiredService',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .then(data  => {
      // history.push('/dashboard')
    })
  }
  
  
    return (
        <div className="dashboard-form mt-5 ">
        <h1>Proceed To Hire</h1>
        <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
            <input className="form-control" defaultValue={loggedInUser.username} {...register("name", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Name is required</p>}
            </div>
            <div className="form-group mb-3">
            <input  className="form-control" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Email is required</p>}
            </div>
            <div className="form-group mb-3">
            <input  className="form-control" defaultValue={selectedService.title } {...register("service", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Email is required</p>}
            </div>
            
            <input className="form-button" type="submit" />
          </form>
        </Card.Body>
      </Card>
    </div>
    );
};

export default Hire;