import { Card, CardItem, Container, Content, H1 } from "native-base";
import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import DeviceInfo from "react-native-device-info";

const brand = DeviceInfo.getBrand();
const buildNum = DeviceInfo.getBuildNumber();
const deviceCountry = DeviceInfo.getDeviceCountry();
const deviceName = DeviceInfo.getDeviceName();
const sysName = DeviceInfo.getSystemName();

class DeviceInfoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      { title: "Brand", val: brand },
      { title: "Build Number", val: buildNum },
      { title: "Device Country", val: deviceCountry },
      { title: "Device Name", val: deviceName },
      { title: "System Name", val: sysName }
    ];

    return (
      <Container>
        <Content style={{ backgroundColor: "rgba(0,0,0,0.1", padding: 10 }}>
          <H1>About This Phone</H1>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <Card>
                  <CardItem header>
                    <Text>{item.title}</Text>
                  </CardItem>
                  <CardItem>
                    <Text>{item.val}</Text>
                  </CardItem>
                </Card>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default DeviceInfoes;
