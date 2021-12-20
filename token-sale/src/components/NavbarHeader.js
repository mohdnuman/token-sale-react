import React, { Component } from 'react';
import GradientButton from 'react-linear-gradient-button';
import {Image} from 'semantic-ui-react';

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
        <Image src='/logo2.png' size='small' className='logo'/>
        <ul>
          <li>
            <a>
              Features
            </a>
          </li>
          <li>
            <a>
              Use Cases
            </a>
          </li>
          <li>
            <a>
              Token Sales
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