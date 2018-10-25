import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right
} from "native-base";
import React, { Component } from "react";

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body />
          <Right>
            <Button
              onPress={() => this.props.navigation.navigate("DeviceInfo")}
              transparent>
              <Icon name="info" type="Feather" />
            </Button>
          </Right>
        </Header>
        <Content />
      </Container>
    );
  }
}

export default MainScreen;
