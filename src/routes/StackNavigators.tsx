import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { Problem } from "../screens";
import Create from "../screens/create/Create";
import ProblemChat from "../screens/problem/ProblemChat";

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
        cardStyle: { backgroundColor: "#E5E8EE" },
      }}
      initialRouteName="Problem"
    >
      <Stack.Screen name="Problem" component={Problem} />
      <Stack.Screen
        options={{ cardStyle: { backgroundColor: "white" } }}
        name="ProblemChat"
        component={ProblemChat}
      />
    </Stack.Navigator>
  );
};

export const CreateStackNavigator = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerShown: true,
        ...transition,
        headerBackTitleVisible: false,
        headerTintColor: "#17282F",
      }}
      initialRouteName="Create"
    >
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
};
