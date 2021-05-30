import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface propsInterface {
  onPress(): void;
  style?: object;
  name?: string;
  nameAfterIcon?: string;
  icon?: JSX.Element;
  containerStyles?: object;
  [propName: string]: any;
}

export function ButtonLink(props: propsInterface) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[props.containerStyles]}>
      <Text style={[styles.onboardBtn, props.style]}>{props.name}</Text>
      <Text> </Text>
      {props.icon}
      <Text> </Text>
      <Text style={[styles.onboardBtn, props.style]}>
        {props.nameAfterIcon}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  onboardBtn: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#17282F",
  },
});
