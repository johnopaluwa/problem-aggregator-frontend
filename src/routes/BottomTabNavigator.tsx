import React, { useState, useEffect } from "react";
import {
  MainStackNavigator,
  ProfileStackNavigator,
  CliqStackNavigator,
  ActivityStackNavigator,
  LocaleStackNavigator,
} from "./StackNavigators";
import {
  ActiveHomeIcon,
  InactiveHomeIcon,
  ActiveCLIQIcon,
  InactiveCLIQIcon,
  ActiveProfileIcon,
  InactiveProfileIcon,
  ActiveActivityIcon,
  InactivActivityIcon,
  ActiveLocaleIcon,
  InactiveLocaleIcon,
} from "../assets/svg/TabIcons";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();
const { height } = Dimensions.get("window");

interface Props {
  tabView: boolean;
}

const BottomTabNavigator = ({ tabView }: Props) => {
  const [tabViewState, setTabViewState] = useState(true);

  useEffect(() => {
    setTabViewState(tabView);
  }, [tabView]);

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
          tabBarVisible: tabViewState,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveHomeIcon /> : <InactiveHomeIcon />,
        }}
      />

      <Tab.Screen
        name="Cliq"
        component={CliqStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveCLIQIcon /> : <InactiveCLIQIcon />,
        }}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveActivityIcon /> : <InactivActivityIcon />,
        }}
      />

      <Tab.Screen
        name="Locale"
        component={LocaleStackNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveLocaleIcon /> : <InactiveLocaleIcon />,
        }}
      />

      <Tab.Screen
        name="User"
        component={ProfileStackNavigator}
        options={{
          // tabBarVisible: false,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveProfileIcon /> : <InactiveProfileIcon />,
        }}
      />
    </Tab.Navigator>
    // </Stack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  tabView: state.tabView,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   showTabView: () => dispatch(showTabView()),
// });

export default connect(mapStateToProps)(BottomTabNavigator);
