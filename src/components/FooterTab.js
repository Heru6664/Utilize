import React, { Component } from "react";
import Home from "../screen/MainScreen/Container/Home";
import Task from "../screen/MainScreen/Container/Task";
import Calendar from "../screen/MainScreen/Container/Calendar";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Task: { screen: Task },
    Calendar: { screen: Calendar }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Task")}>
              <Icon name="tasklist" type="Octicons" />
              <Text>Task List</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Calendar")}>
              <Icon name="calendar" type="Foundation" />
              <Text>Calendar</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
