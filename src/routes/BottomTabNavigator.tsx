import randomIcon from '@iconify/icons-el/random';
import { Icon } from '@iconify/react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { HomeIcon, WantIcon } from '../../assets/svg/TabIcons';
import { CreateStackNavigator, ProblemStackNavigator, WantStackNavigator } from "./StackNavigators";


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
            const color = focused ? "#002060" : "#0000004d";
            return (
              <View style={{ position: "relative" }}>
                <View style={{ alignItems: "center" }}>
                  <HomeIcon color={color} />
                  <Text style={[styles.iconLabel, { color }]}>
                    Problem
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
              name="Want"
              component={WantStackNavigator}
              options={{
                tabBarVisible: true,
                tabBarIcon: ({ focused }) => {
                  const color = focused ? "#002060" : "#0000004d";
                  return (
                    <View style={{ position: "relative" }}>
                      <View style={{ alignItems: "center" }}>
                        <Icon icon={randomIcon} color ={color} style={{ fontSize: '20px'}} />
                        <Text style={[styles.iconLabel, { color }]}>
                          Want
                        </Text>
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
                  const color = focused ? "#002060" : "#0000004d";
                  return (
                    <View style={{ position: "relative" }}>
                      <View style={{ alignItems: "center" }}>
                        <WantIcon color={color} />
                        <Text style={[styles.iconLabel, { color }]}>
                          Create
                        </Text>
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
