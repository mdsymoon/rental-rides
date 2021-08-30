import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner p-5 ">
           <div className="container ">
                <div className="row py-5 ">
                    <div className="col-lg-6">
                        <h1 className="topBanner-title" >THE BEST SAFETY <br/><span style={{color:"#0285E4"}}> MEASURES</span> </h1>
                        <p className="topBanner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio expedita saepe itaque similique quo doloribus, vel repellendus veritatis facere soluta quia fugit provident labore perferendis quasi amet odio iste quisquam quam minima excepturi error. Perspiciatis consequatur ullam doloribus illum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;