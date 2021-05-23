import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getUserToken, tokenInterface } from "../redux/token";
import BottomTabNavigator from "./BottomTabNavigator";

const RootStack = createStackNavigator();
const transition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

interface RootStackScreenProps {
  getUserToken: any;
  token: {
    token: tokenInterface;
    loading: boolean;
    error: string | null;
  } | null;
}

const RootStackScreen = ({
  getUserToken,
  token:ReduxToken,
}: RootStackScreenProps) => {
  const [token, setToken] = useState<tokenInterface | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUserToken();
  }, []);

  useEffect(() => {
    console.log(ReduxToken);
    console.log(ReduxToken.loading);
    setToken(ReduxToken.token);
    setLoading(ReduxToken.loading);
  }, [ReduxToken]);

  let displayNavigator;

  if (loading) {
    displayNavigator = <ActivityIndicator />;
  }

  if (token && token.userToken) {
    displayNavigator = (
      <RootStack.Screen name="App" component={BottomTabNavigator} />
    );
  } else {
    displayNavigator = (
      <RootStack.Screen name="Auth" component={BottomTabNavigator} />
    );
  }

  return (
    //@ts-ignore
    <RootStack.Navigator screenOptions={{ headerShown: false, ...transition }}>
      {displayNavigator}
    </RootStack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootStackScreen);
