import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class MiddleBanner extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="/welcome.css" />
        <Image id="banner" src="/middlebanner.jpeg" />
        <div id="main">
          <div id="txt">
            <h1>WELCOME TO MEGALLANIC.IO</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleBanner;
