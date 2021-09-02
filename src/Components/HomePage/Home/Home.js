import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Introduce from './../Introduce/Introduce';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Introduce></Introduce>
            <Contact></Contact>
        </div>
    );
};

export default Home;