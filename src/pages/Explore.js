import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Category from "../components/Category";

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
          {/* Barra de Pesquisa */}
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 1
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
          {/* Fim Barra de Pesquisa */}

          {/* Scroll horizontal */}
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "black"
                }}
              >
                What can we help you find, Sergio?
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Category
                    name="Home"
                    imageUri={require("../assets/home.jpg")}
                  />
                  <Category
                    name="Experiences"
                    imageUri={require("../assets/experiences.jpg")}
                  />
                  <Category
                    name="Restaurant"
                    imageUri={require("../assets/restaurant.jpg")}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
          {/* Fim Scroll horizontal */}
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;
