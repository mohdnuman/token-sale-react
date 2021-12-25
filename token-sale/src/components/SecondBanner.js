import React, { Component } from "react";
import {Image} from 'semantic-ui-react';
import GradientButton from 'react-linear-gradient-button';
 
class SecondBanner extends Component {
  render() {
    return (
      <div>
        <Image id="second-banner" src="/secondbanner.jpeg" />
        <h1 id="article-heading">
          Articles
        </h1>
        <p id="article-desc">
          Get Latest Updates On Tech That Matters. 
        </p>
        <GradientButton
          gradient={["#000000", "#615b5b","#d2d0d0"]}
          background={"white"}
          color={"black"}
          id='article-button'
          fontSize='2rem'
        >
          View Articles
        </GradientButton>
      </div>
    );
  }
}

export default SecondBanner;
