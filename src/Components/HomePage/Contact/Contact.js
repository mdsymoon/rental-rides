import React from "react";

import { useForm } from "react-hook-form";


const Contact = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    data.date = new Date().toDateString();
    
   
    fetch("https://peaceful-beach-36227.herokuapp.com/postEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
       reset();

      });
  };

  return (
    <div  style={{backgroundColor:"#404040"}}>
      <div className="container">
        <div>
          <h1  className="text-center  py-5" style={{color:"#0285E4"}}>Contact With Us</h1>
          <div className="pb-5 px-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.exampleRequired && (
                <p className="text-danger">name is required</p>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.exampleRequired && (
                <p className="text-danger">subject is required</p>
              )}
            </div>
            <div className="form-group mb-3">
              <textarea
                as="textarea"
                rows={3}
                className="form-control"
                placeholder="Your Message"
                {...register("message", { required: true })}
              />
              {errors.exampleRequired && (
                <p className="text-danger">title is required</p>
              )}
            </div>

            <input className="form-button" type="submit" />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
