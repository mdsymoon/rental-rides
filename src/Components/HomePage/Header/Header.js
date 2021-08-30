import React from 'react';
import Navbar from '../Navbar/Navigation';
import './Header.css';
import TopBanner from './../TopBanner/TopBanner';

const Header = () => {
    return (
        <div className='header'>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
        </div>
    );
};

export default Header;