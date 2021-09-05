import React from 'react';
import './AddAmin.css';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Card } from 'react-bootstrap';

const AddAdmin = () => {
    const history = useHistory();

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      
  
    fetch('http://localhost:4000/addAdmin' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      history.push('/dashboard')
    })
    } ;
    console.log(watch("example"));
    return (
        <div className="dashboard-form mt-5 ">
        <h1>Add Admin</h1>
        <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
            <input className="form-control" placeholder="Admin Name"{...register("name", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Name is required</p>}
            </div>
            <div className="form-group mb-3">
            <input  className="form-control" placeholder="Admin Email" {...register("admin", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Email is required</p>}
            </div>
            
            <input className="form-button" type="submit" />
          </form>
        </Card.Body>
      </Card>
    </div>
    );
};

export default AddAdmin;