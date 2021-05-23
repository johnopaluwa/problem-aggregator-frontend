import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import {
  Home
} from "../screens";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();
const transition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerShown: false,
        ...transition,
        headerBackTitleVisible: false,
        headerTintColor: "#17282F",
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
};



export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerShown: false,
        ...transition,
        headerBackTitleVisible: false,
        headerTintColor: "#17282F",
      }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};
