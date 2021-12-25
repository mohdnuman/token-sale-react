import React, { Component } from "react";
import { Image, Input,Icon, Button } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h1 id="footer-heading">Contact us</h1>
        <ul id="contact">
          <li>
            <span>
              <Image
                src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1640432881~hmac=511993db126b13d2ed52f89f88f3e97b"
                className="icon"
                size="mini"
                avatar
              />
              @magellanic.io
            </span>
          </li>
          <br />
          <br />
          <li>
            <span>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                size="mini"
                className="icon"
                avatar
              />
              magellanic@gmail.com
            </span>
          </li>
          <br />
          <br/>
        </ul>
        <br/>
        <br/>

        <div id="subscribe">
          <h1>Subscribe To Our Newsletter</h1>
          <Input iconPosition="left" placeholder="Email">
            <Icon name="at" />
            <input />
          </Input>
          <Button>
            Subscribe
          </Button>
        </div>
      </div>
    );
  }
}

export default Footer;
