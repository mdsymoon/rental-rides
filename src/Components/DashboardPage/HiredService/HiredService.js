import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from './../../../App';
import HiredCar from './../HiredCar/HiredCar';

const HiredService = () => {
    const [hired , setHired] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/hiredCar') 
        .then(res => res.json())
        .then(data => {
            setHired(data);
           
        },[])
    })
    return (
        <div>
            <h1>My Hired Car</h1>
            <div className="row container">
                {
                    hired.map((hire => <HiredCar hire={hire}></HiredCar>))
                }
            </div>
        </div>
    );
};

export default HiredService;