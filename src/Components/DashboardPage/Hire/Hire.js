import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { serviceContext, UserContext } from "../../../App";
import { useHistory } from "react-router-dom";

const Hire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedService , ] = useContext(serviceContext);
  const [loggedInUser ,] = useContext(UserContext);
  const history = useHistory();

  const onSubmit = (data) => {
    
    const orderData = {
      ...data,
      ...selectedService,
      orderStatus:'Hired',
      orderDate: new Date().toDateString(),
    };
    
    fetch("https://peaceful-beach-36227.herokuapp.com/hiredService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/dashboard/hiredCar");
      });
  };

  return (
    <div className="dashboard-form mt-5 ">
      <h1>Proceed To Hire</h1>
      <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                defaultValue={loggedInUser.username}
                {...register("name", { required: true })}
              />
              {errors.exampleRequired && (
                <p className="text-danger">Admin Name is required</p>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                defaultValue={loggedInUser.email}
                {...register("email", { required: true })}
              />
              {errors.exampleRequired && (
                <p className="text-danger">Admin Email is required</p>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                defaultValue={selectedService?.title}
                {...register("service", { required: true })}
              />
              {errors.exampleRequired && (
                <p className="text-danger">Admin Email is required</p>
              )}
            </div>

            <input className="form-button" type="submit"/>
              
            
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hire;
