import React, { Component } from "react";
import GradientButton from "react-linear-gradient-button";
import { Menu,Image } from "semantic-ui-react";

class NavbarHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            activeItem:''
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
      const activeItem=this.state;
    return (
      <div
        style={{
          backgroundImage: "url(/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Menu borderless color="#14134f" >
        <Menu.Item name="Logo"><Image src='/logo.png' size='tiny' /></Menu.Item>
        <Menu.Item
          name='Features'
          active={activeItem === 'Fetures'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='Use Cases'
          active={activeItem === 'Use Cases'}
          onClick={this.handleItemClick}
        >
          Use Cases
        </Menu.Item>

        <Menu.Item
          name='Token Sale'
          active={activeItem === 'Token Sale'}
          onClick={this.handleItemClick}
        >
         Token Sale
        </Menu.Item>
        <Menu.Item
          name='Our Mission'
          active={activeItem === 'Our Mission'}
          onClick={this.handleItemClick}
        >
         Our Mission
        </Menu.Item>
        <Menu.Item
          name='Contact Us'
          active={activeItem === 'Conatact Us'}
          onClick={this.handleItemClick}
        >
         Contact Us
        </Menu.Item>
        </Menu>
        <br />
        <br />
        <br />
        fdfd
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />

        <GradientButton
          gradient={["#4158D0", "#C850C0"]}
          background={"#291672"}
          color={"white"}
        >
          EXPLORE COIN
        </GradientButton>
      </div>
    );
  }
}

export default NavbarHeader;
