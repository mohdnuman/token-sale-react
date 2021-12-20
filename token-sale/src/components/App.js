import React, { Component } from "react";
import { NavbarHeader } from ".";

class App extends Component {
  render() {
    return (
      <div>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        
        <NavbarHeader />
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
      </div>
    );
  }
}

export default App;
