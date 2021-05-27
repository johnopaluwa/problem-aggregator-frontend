import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

interface chatInterface {
  text?: string;
  count?: number;
  type?: string;
  isAlSoMyWantOrHave?: boolean;
}

export function ChatCard(props: chatInterface) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Avatar
          rounded
          title="MD"
          size="small"
          onPress={() => console.log("Works!")}
          containerStyle={styles.avatarcontainerStyle}
          titleStyle={styles.avatarTitleStyle}
          activeOpacity={0.7}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 3 }}>xanbsies</Text>
          <Text
            style={{
              fontFamily: "regular",
              fontStyle: "normal",
              fontSize: 16,
              letterSpacing: -0.24,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus mus
            cursus pretium donec tristique ipsum scelerisque. Odio aliquet
            mauris nulla consectetur tempus. Vestibulum, elementum sed nec dui
            egestas morbi diam tincidunt. Mauris tincidunt eget ipsum egestas
            mattis sed diam ultrices.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarcontainerStyle: {
    backgroundColor: "#4D606E",
  },

  avatarTitleStyle: {
    color: "white",
  },
});
