import React , {useState} from 'react';
import { useEffect } from 'react';
import spinnerGif from '../../../Images/Spinner-1s-200px.gif';
import CustomerMail from './../CustomerMail/CustomerMail';

const Email = () => {
    const [email , setEmail] = useState([]);
    const [loadData , setLoadData] = useState(false);

    useEffect(() => {
        fetch("https://peaceful-beach-36227.herokuapp.com/getEmail")
          .then((res) => res.json())
          .then((data) => {
            setEmail(data);
            setLoadData(true);
          });
      });

    return (
        <div className="container dashboard-form">
      <h1 className="text-center p-5" >
        Customer Mail
      </h1>
      <div className="customer-review ">
        {!loadData && (
          <img src={spinnerGif} alt=""/>
        )}
        {email.map((mail) => (
          <CustomerMail key={mail._id} mail={mail}></CustomerMail>
        ))}
      </div>
    </div>
    );
};

export default Email;