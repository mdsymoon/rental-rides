import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div  style={{backgroundColor:"#404040"}}>
      <div className="container">
        <div>
          <h1 className="text-center  py-5" style={{color:"#0285E4"}}>Contact With Us</h1>
          <div className="pb-5 px-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Subject</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-white">Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="button" style={{width:'150px', fontWeight:'bold'}}>
                Done
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
