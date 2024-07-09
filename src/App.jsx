import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import Service from './Components/Service/Service';
import Navbar from './Components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Hero/>
      <Section/>
      <Service/>
      <Footer/>
          </div>
   
  );
}

export default App;
