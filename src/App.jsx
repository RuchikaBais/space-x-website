import React, { useEffect } from 'react'
import BgVideo from './assets/earth-bg.mp4'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Card from './components/Hero/Card';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Satelite from './components/Banner/Satelite';


const App = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    })
  })

  return (
    <div>
      <div className="h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-screen w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Card />
      <Banner />
      <Satelite />
      <Footer />
    </div>
  );
};

export default App