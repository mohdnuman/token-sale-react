import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class MiddleBanner extends Component {
  render() {
    return (
      <div>
        <Image id="banner" src="/middlebanner.jpeg" />
        <h1 id="welcome-text" >WELCOME TO MEGALLANIC.IO</h1>
        <p id="welcome-desc">
            A Community of Tech Enthusiasts.
        </p>

      </div>
    );
  }
}

export default MiddleBanner;
