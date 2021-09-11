import React from 'react';
import { Card } from 'react-bootstrap';

const CustomerMail = ({mail}) => {
    return (
        <Card style={{ width: '50rem' , marginBottom: '20px' }}>
  
  <Card.Body>
    <Card.Title>Name : {mail.name}</Card.Title>
    <h6>subject : {mail.subject}</h6>
    <small>{mail.date}</small>
    <Card.Text>
      Issue : {mail.message}
    </Card.Text>
    
  </Card.Body>
</Card>
    );
};

export default CustomerMail;