import React from "react";
import { Card } from "react-bootstrap";
import "./AddService.css";
import { useForm } from "react-hook-form";
import "./AddService.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddService = () => {
    const history = useHistory();
  const {register, handleSubmit,formState: { errors },} = useForm();
  const [file, setFile] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }


  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('price', data.price);

    fetch(`http://localhost:4000/addService`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
       history.push('/')
      })
  };

  return (
    <div className="dashboard-form  mt-5 ">
      <h2>Add Service</h2>
      <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
            <input className="form-control" placeholder="Service Title"{...register("title", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">title is required</p>}
            </div>
            <div className="form-group mb-3">
            <input className="form-control" placeholder="Service Price" {...register("price", { required: true })} />
             {errors.exampleRequired && <p className="text-danger">title is required</p>}
            </div>
            <div className="form-group mb-3">
                <input className="form-control" type="file" placeholder="Service Price" {...register("file", { required: true })} onChange={handleFileChange} />
                {errors.icon && <p className="text-danger">image is required</p>}
              </div>
            <input type="submit" className="form-button" />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddService;
