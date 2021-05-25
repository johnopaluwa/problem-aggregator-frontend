import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as Linking from "expo-linking";
import React, { useEffect } from "react";
import { ActivityIndicator } from 'react-native';
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import RootNavigator from "./src/routes/RootNavigators";

export default function App() {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  const _loadFontsAsync = async () => {
    try {
      await Font.loadAsync({
        regular: require("./assets/fonts/Karla-Regular.ttf"),
        bold: require("./assets/fonts/Karla-Bold.ttf"),
      });
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      await _loadFontsAsync();
      console.log(
        "GET INITIAL LINK",
        Linking.parse(await Linking.getInitialURL())
      );

      Linking.addEventListener("url", (url) => {
        console.log("GET INITIAL LINK@@@", url);
      });
    })();

    return () => {
      Linking.removeEventListener("url", (url) => {
        console.log("GET INITIAL LINK@@@", url);
      });
    };
  }, []);

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

