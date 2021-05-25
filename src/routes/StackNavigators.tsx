import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import { Problem } from "../screens";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();
const transition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const ProblemStackNavigator = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerShown: true,
        ...transition,
        headerBackTitleVisible: false,
        headerTintColor: "#17282F",
      }, 
      {
        cardStyle:{backgroundColor:"#E5E8EE"}
      }}
      initialRouteName="Problem"
    >
      <Stack.Screen name="Problem" component={Problem} />

    </Stack.Navigator>
  );
};



export const WantStackNavigator = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerShown: false,
        ...transition,
        headerBackTitleVisible: false,
        headerTintColor: "#17282F",
      }}
      initialRouteName="Want"
    >
      <Stack.Screen name="Want" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export const CreateStackNavigator = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerShown: false,
        ...transition,
        headerBackTitleVisible: false,
        headerTintColor: "#17282F",
      }}
      initialRouteName="Create"
    >
      <Stack.Screen name="Create" component={SplashScreen} />
    </Stack.Navigator>
  );
};
