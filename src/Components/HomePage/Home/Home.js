import React from "react";
import Circle from "../Circle/Circle";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Introduce from "./../Introduce/Introduce";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Introduce></Introduce>
      <Clients></Clients>
      <Circle></Circle>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
