import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { CreateIcon, ProblemIcon } from "../../assets/svg/TabIcons";
import { CreateStackNavigator, ProblemStackNavigator } from "./StackNavigators";

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
        name="Problem"
        component={ProblemStackNavigator}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const color = focused ? "#3FBAC2" : "#4D606E";
            return (
              <View style={{ position: "relative" }}>
                <View style={{ alignItems: "center" }}>
                  <ProblemIcon color={color} />
                  <Text style={[styles.iconLabel, { color }]}>Problem</Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Create"
        component={CreateStackNavigator}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const color = focused ? "#3FBAC2" : "#4D606E";
            return (
              <View style={{ position: "relative" }}>
                <View style={{ alignItems: "center" }}>
                  <CreateIcon color={color} />
                  <Text style={[styles.iconLabel, { color }]}>Create</Text>
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconLabel: {
    fontFamily: "bold",
    fontSize: 10,
    lineHeight: 12,
  },
});

export default connect()(BottomTabNavigator);
