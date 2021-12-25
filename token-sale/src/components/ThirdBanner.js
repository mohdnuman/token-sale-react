import React, { Component } from "react";
import {Image} from 'semantic-ui-react';
import GradientButton from 'react-linear-gradient-button';
 
class ThirdBanner extends Component {
  render() {
    return (
      <div>
        <Image id="third-banner" src="/thirdbanner.jpeg" />
        <h1 id="dao-heading">
          Join Our DAO
        </h1>
        <p id="dao-desc">
          Become A Part Of Our Community And Participate In Making Decisions With Us.
        </p>
        <GradientButton
          gradient={["#000000", "#615b5b","#d2d0d0"]}
          background={"white"}
          color={"black"}
          id='dao-button'
          fontSize='2rem'
        >
          Join Magellanic DAO
        </GradientButton>
      </div>
    );
  }
}

export default ThirdBanner;
