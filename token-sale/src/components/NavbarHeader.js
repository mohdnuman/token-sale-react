import React, { Component } from "react";
import GradientButton from "react-linear-gradient-button";
import { Menu } from "semantic-ui-react";

class NavbarHeader extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Menu>
          <Menu.Item name="Features"  />
          <Menu.Item name="Use Cases"  />
          <Menu.Item name="Token Sale"  />
          <Menu.Item name="Our Mission"  />
          <Menu.Item name="Contact Us" />
        </Menu>
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
