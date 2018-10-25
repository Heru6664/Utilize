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
import FooterTab from "../../components/FooterTab";

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
        <FooterTab />
      </Container>
    );
  }
}

export default MainScreen;
