import React from 'react';
import './Dashboard.css';
import SideNavbar from '../SideNavbar/SideNavbar';
import { Route } from 'react-router-dom';
import AddService from './../AddService/AddService';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 sidebar-container">
                    <SideNavbar></SideNavbar>
                    </div>
                    <div className="col-lg-10">
                        <Route path="/dashboard/addService">
                            <AddService></AddService>
                        </Route>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;