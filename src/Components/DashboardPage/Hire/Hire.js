import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';



const Hire = () => {
    const {register, handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => {

    }
    
    return (
        <div className="dashboard-form mt-5 ">
        <h1>Proceed To Hire</h1>
        <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
            <input className="form-control" placeholder="Your Name"{...register("name", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Name is required</p>}
            </div>
            <div className="form-group mb-3">
            <input  className="form-control" placeholder="Your Email" {...register("admin", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">Admin Email is required</p>}
            </div>
            <div className="form-group mb-3">
            <input  className="form-control" placeholder="Your Email" {...register("admin", { required: true })} />
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