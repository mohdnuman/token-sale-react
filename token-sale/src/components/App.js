import React, { Component } from "react";
import {NavbarHeader,MiddleBanner,SecondBanner,ThirdBanner } from ".";

class App extends Component {
  render() {
    return (
      <div>
       
        
        <NavbarHeader />
        <MiddleBanner/>
        <SecondBanner/>
        <ThirdBanner/>

        
      </div>
    );
  }
}

export default App;
