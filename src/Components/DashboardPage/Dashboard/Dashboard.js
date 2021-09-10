import React from 'react';
import './Dashboard.css';
import SideNavbar from '../SideNavbar/SideNavbar';
import { Route } from 'react-router-dom';
import Review from './../Review/Review';
import AddService from './../AddService/AddService';
import AddAdmin from '../AddAdmin/AddAdmin';
import Hire from '../Hire/Hire';
import HiredService from '../HiredService/HiredService';
import AllData from '../AllData/AllData';
import Payment from '../Payment/Payment';


const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-lg-2 sidebar-container" >
                    <SideNavbar></SideNavbar>
                    </div>
                    <div className="col-lg-10">
                        <Route path="/dashboard/addService">
                            <AddService></AddService>
                        </Route>
                        <Route path="/dashboard/review">
                            <Review></Review>
                        </Route>
                        <Route path="/dashboard/addAdmin">
                           <AddAdmin></AddAdmin>
                        </Route>
                        <Route path="/dashboard/hire">
                           <Hire></Hire>
                        </Route>
                        <Route path="/dashboard/hiredCar">
                           <HiredService></HiredService>
                        </Route>
                        <Route path="/dashboard/userData">
                           <AllData></AllData>
                        </Route>
                        <Route path="/dashboard/payment">
                           <Payment></Payment>
                        </Route>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;