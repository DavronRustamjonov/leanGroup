import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Add from './Components/Add/Add';

import SliderItem from './Components/Section/SliderItem';
import Service from './Components/Service/Service';
const App = () => {
  return (
    <div className="App">
      
      
      <Navbar/>
      <Header/>    
      <Hero/>
      <SliderItem/> 
      <Service/>
      <Add/>


      
                </div>
   
  );
}

export default App;
