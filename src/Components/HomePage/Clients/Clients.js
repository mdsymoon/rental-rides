import React from 'react';
import client1 from "../../../Images/client-1.png";
import client2 from "../../../Images/client-2.png";
import client3 from "../../../Images/client-3.png";
import client4 from "../../../Images/client-4.png";
import client5 from "../../../Images/client-5.png";

const Clients = () => {
    return (
        <div className="clients ">
           <div className="container">
           <div className="text-center pt-5">
           <h1 style={{color:"#4A5764"}}>Our Clients</h1> 
           <p>It is a long established fact that a reader will be distracted by the readable content of a page <br/> when looking at its layout</p>
           </div>
           <div className="flex  justify-content-center text-center">
                <img src={client1} alt="" style={{}} className="m-5 "/>
                <img src={client2} alt=""className="m-5"/>
                <img src={client3} alt=""className="m-5"/>
                <img src={client4} alt=""className="m-5"/>
                <img src={client5} alt=""className="m-5"/>
           </div>
           </div>
        </div>
    );
};

export default Clients;