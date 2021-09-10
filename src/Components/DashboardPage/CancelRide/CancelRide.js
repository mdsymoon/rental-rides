import React from 'react';
import { useHistory } from 'react-router-dom';

const CancelRide = () => {
    const history = useHistory();
    return (
        <div className="text-center mt-5 pt-5">
            <h1>Are you sure  want to cancel your ride?</h1>
            <button className="mt-5" onClick={() => history.push('/dashboard/hiredCar')}>YES</button>
        </div>
    );
};

export default CancelRide;