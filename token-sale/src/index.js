import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
    <link
      async
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
    />
    <link rel="stylesheet" href='/index.css'/>
    <div id="background">
      <App />
    </div>
    <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
  </React.StrictMode>,
  document.getElementById("root")
);
