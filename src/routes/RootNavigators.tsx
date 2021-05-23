import {
  CardStyleInterpolators, createStackNavigator
} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProgressEnum, ReportProgress } from '../global/ReportProgress';
import { getUserToken } from "../redux/token";
import { tokenDataInterface, tokenReducerInterface } from '../redux/token/TokenInterface';
import BottomTabNavigator from "./BottomTabNavigator";
import { AuthStackNavigator } from './StackNavigators';

interface RootNavigatorProps {
  getUserToken:(reportProgress: ReportProgress)=> any;
  tokenReducerState: tokenReducerInterface;
}

const RootStack = createStackNavigator();
const transition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
const reportProgress = new ReportProgress();


const RootNavigator = ({
  getUserToken,
  tokenReducerState,
}: RootNavigatorProps) => {
  const [token, setToken] = useState<tokenDataInterface | null>(null);
  const [progress, setProgress] = useState(ProgressEnum.none);

  useEffect(() => {
    getUserToken(reportProgress);
  }, []);

  useEffect(() => {
    setToken(tokenReducerState.token);
    setProgress(reportProgress.state);
  }, [tokenReducerState]);

  let displayNavigator;

  if (token && token.value) {
    displayNavigator = (
      <RootStack.Screen name="App" component={BottomTabNavigator} />
    );
  } else {
    displayNavigator = (
      <RootStack.Screen name="Auth" component={AuthStackNavigator} />
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
  tokenReducerState: state.tokenReducerState,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserToken: (reportProgress: ReportProgress) => dispatch(getUserToken(reportProgress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
