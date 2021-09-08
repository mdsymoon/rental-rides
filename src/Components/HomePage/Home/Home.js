import React from "react";

import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Introduce from "./../Introduce/Introduce";
import OurService from './../OurService/OurService';
import CustomerReview from './../CustomerReview/CustomerReview';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Introduce></Introduce>
      <OurService></OurService>
      <Clients></Clients>
     <CustomerReview></CustomerReview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
