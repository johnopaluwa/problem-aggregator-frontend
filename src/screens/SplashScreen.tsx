import AsyncStorage from "@react-native-community/async-storage";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashLogo from '../../assets/svg/SplashLogo';

export default function SplashScreen({ navigation }: any) {
  const [firstLaunch, setFirstLaunch] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  setTimeout(() => {
    if (firstLaunch === null) {
      return;
    } else if (firstLaunch === true) {
     // navigation.replace("Intro");
    } else {
      //navigation.replace("Signin");
    }
  }, 3000);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoSvg}>
        <SplashLogo />
      </View>
      <Text style={styles.logoFooter}>Find the vibe around you!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoSvg: {
    flex: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  logoFooter: {
    flex: 2,
    alignSelf: "center",
    color: "#13988E",
    fontFamily: "regular",
    fontSize: 16,
  },
});
