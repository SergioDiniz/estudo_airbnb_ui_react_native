import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export class Explore extends Component {
  
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === "android") {
      this.startHeaderHeight += StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                alignItems: "center"
              }}
            >
              <Icon
                name="ios-search"
                size={20}
                style={{ marginRight: 10, marginLeft: 10 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white"
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;
