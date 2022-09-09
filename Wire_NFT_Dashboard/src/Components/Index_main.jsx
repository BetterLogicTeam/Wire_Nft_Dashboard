import React from "react";
import Header from './Header/Header';
import Landing from './Landing/Landing';
import About from './About/About';
import Explore from './Explore/Explore';
import How_to_play from './How_to_play/How_to_play';
import Tokenomics from './Tokenomics/Tokenomics';
import Footer from './Footer/Footer';
import Newfile from "./Newfile";


function Index_main() {
  return (
    <div className="">
      <Header />
      <Landing />
      <About />
      {/* <Explore /> */}
      <How_to_play />
   
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default Index_main;