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
import { TouchableOpacity } from "react-native";
import FooterTab from "../../components/FooterTab";

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  navigating(routeName) {
    this.props.navigation.navigate(routeName);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => this.navigating("Scanner")}>
              <Icon
                style={{ color: "white" }}
                name="ios-qr-scanner"
                type="Ionicons"
              />
            </TouchableOpacity>
          </Left>
          <Body />
          <Right>
            <TouchableOpacity onPress={() => this.navigating("DeviceInfo")}>
              <Icon style={{ color: "white" }} name="info" type="Feather" />
            </TouchableOpacity>
          </Right>
        </Header>
        <FooterTab />
      </Container>
    );
  }
}

export default MainScreen;
