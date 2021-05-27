import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProgressEnum, ReportProgress } from "../global/ReportProgress";
import { getProblemsByPage } from "../redux/problems/ProblemActions";
import {
  problemDataInterface,
  problemReducerInterface,
} from "../redux/problems/ProblemInterface";
import BottomTabNavigator from "./BottomTabNavigator";

interface RootNavigatorProps {
  getProblemsByPage: (reportProgress: ReportProgress) => any;
  problemsReducerState: problemReducerInterface;
}

const RootStack = createStackNavigator();
const transition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
const reportProgress = new ReportProgress();

const RootNavigator = ({
  getProblemsByPage,
  problemsReducerState,
}: RootNavigatorProps) => {
  const [progress, setProgress] = useState(ProgressEnum.none);

  const [problems, setProblems] = useState<problemDataInterface[] | null>(null);

  useEffect(() => {
    getProblemsByPage(reportProgress);
  }, []);

  useEffect(() => {
    setProblems(problemsReducerState.problems);
    setProgress(reportProgress.state);
  }, [problemsReducerState]);

  let displayNavigator = (
    <RootStack.Screen name="App" component={BottomTabNavigator} />
  );

  // if (!problems) {
  //   displayNavigator = (
  //     <RootStack.Screen name="App" component={BottomTabNavigator} />
  //   );
  // } else {
  //   displayNavigator = (
  //     <RootStack.Screen name="Auth" component={AuthStackNavigator} />
  //   );
  // }

  return (
    //@ts-ignore
    <RootStack.Navigator screenOptions={{ headerShown: false, ...transition }}>
      {displayNavigator}
    </RootStack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  problemsReducerState: state.problemsReducerState,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProblemsByPage: (reportProgress: ReportProgress) =>
    dispatch(getProblemsByPage(0, reportProgress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
