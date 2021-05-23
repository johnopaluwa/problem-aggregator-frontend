import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { connect } from "react-redux";
import { HomeIcon } from '../../assets/svg/TabIcons';
import {
  MainStackNavigator
} from "./StackNavigators";


const Tab = createBottomTabNavigator();
const { height } = Dimensions.get("window");



const BottomTabNavigator = () => {
  const [tabViewState, setTabViewState] = useState(true);



  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { height: (height * 8) / 100 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const color = focused ? "#002060" : "#0000004d";
            return (
              <View style={{ position: "relative" }}>
                <View style={{ alignItems: "center" }}>
                  <HomeIcon color={color} />
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};



export default connect()(BottomTabNavigator);
