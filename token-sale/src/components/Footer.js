import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h1 id="footer-heading">Contact us</h1>
        <ul>
          <li>
            <span>
              <Image src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1640432881~hmac=511993db126b13d2ed52f89f88f3e97b" className='icon' size="mini"/>
            @magellanic.io
            </span>
          </li>
          <br />
          <li>
            <span>
              <Image src="https://cdn-icons-png.flaticon.com/512/732/732200.png" size="mini" className='icon'/>
              magellanic@gmail.com
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
