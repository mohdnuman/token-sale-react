import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import {Card} from './index';

class Features extends Component {
  render() {
    return (
      <div>
        <Container>
            <h1>Features</h1>
          <Card heading="Secure Transactions" url="/transaction.jpg"></Card>
        </Container>
      </div>
    );
  }
}

export default Features;
