import React, { Component } from "react";
import {NavbarHeader,MiddleBanner,SecondBanner,ThirdBanner,Footer } from ".";

class App extends Component {
  render() {
    return (
      <div>
       
        
        <NavbarHeader />
        <MiddleBanner/>
        <SecondBanner/>
        <ThirdBanner/>
        <Footer/>

        
      </div>
    );
  }
}

export default App;
