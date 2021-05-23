import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import RootStackScreen from "./src/routes/TabNavigators";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}

