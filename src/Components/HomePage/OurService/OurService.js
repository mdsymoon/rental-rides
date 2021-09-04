import React, { useState, useEffect } from 'react';
import ServiceCard from './../ServiceCard/ServiceCard';


const OurService = () => {
    const [services, setServices] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:4000/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data)
       
      })
  }, [services])
    return (
        <div className="our-service">
            <div className="container">
                <h1  className="text-center"  style={{color:"#0285E4"}}>Our Service</h1>
                <div className="card-container row pt-5">
                    
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>            
        </div>
    );
};

export default OurService;