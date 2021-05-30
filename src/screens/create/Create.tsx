import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { AddIcon, Arrow } from "../../../assets/svg/OtherIcons";
import { ButtonLink } from "../../components/ButtonLink";

const { height, width } = Dimensions.get("window");

function Create({ navigation }: any) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "regular",
          fontStyle: "normal",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: height * 0.25,
          fontSize: 16,
          color: "#4D606E",
        }}
      >
        <Text>Maximum text length is 200 </Text>
      </Text>
      <Text
        style={{
          position: "absolute",
          top: height * 0.65,
          right: width * 0.18,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Write your problem or want
      </Text>
      <Arrow
        style={{
          position: "absolute",
          top: height * 0.69,
          right: width * 0.15,
        }}
      />

      <ButtonLink
        onPress={() => console.log("1")}
        icon={<AddIcon fill="#3FBAC2" stroke="#3FBAC2" />}
        containerStyles={{
          position: "absolute",
          right: width * 0.06,
          top: height * 0.7,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default connect()(Create);
