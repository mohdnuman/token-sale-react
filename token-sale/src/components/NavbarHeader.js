import React, { Component } from 'react';
import GradientButton from 'react-linear-gradient-button';

class NavbarHeader extends Component {
  render() {
    return (
      <div className='navbar'>
        {/* <GradientButton
          gradient={["#4158D0", "#C850C0"]}
          background={"#291672"}
          color={"white"}
        >
          EXPLORE COIN
        </GradientButton> */}
        <h1 id="logo">magellanic</h1>
        <ul>
          <li>
            <a>
              Articles
            </a>
          </li>
          <li>
            <a>
              Join Our DAO
            </a>
          </li>
          <li>
            <a>
              Subscribe
            </a>
          </li>
          <li>
            <a>
              Our Mission
            </a>
          </li>
          <li>
            <a>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarHeader;