import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Explore from "./pages/Explore";
import Inbox from "./pages/Inbox";
import Saved from "./pages/Saved";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "EXPLORE",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "SAVED",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-empty" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "TRIPS",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./assets/airbnb.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }
});
