import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StarIcon } from "../../assets/svg/OtherIcons";
import { nFormatter } from "../helpers/formatter";
import { ButtonLink } from "./ButtonLink";

interface cardInterface {
  onTypePress(): void;
  text?: string;
  count?: number;
  type?: string;
  isAlSoMyWantOrHave?: boolean;
}

export function HaveWantCard(props: cardInterface) {
  return (
    <View style={styles.card}>
      <Text style={styles.card__text}>{props.text}</Text>
      <View style={styles.divider}></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 9,
          paddingRight: 9,
        }}
      >
        <Text style={styles.card__text_left}>
          {nFormatter(props.count ? props.count : 0, 1) + " " + props.type}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <ButtonLink
            name={"I" + " " + props.type}
            onPress={props.onTypePress}
            icon={
              <StarIcon
                size={16}
                color="#4D606E"
                fill={
                  !!props.isAlSoMyWantOrHave &&
                  props.isAlSoMyWantOrHave === true
                    ? "#3FBAC2"
                    : "white"
                }
                stroke={
                  !!props.isAlSoMyWantOrHave &&
                  props.isAlSoMyWantOrHave === true
                    ? "#3FBAC2"
                    : "black"
                }
              />
            }
            style={{
              ...styles.card__text_right__text,
              color:
                !!props.isAlSoMyWantOrHave && props.isAlSoMyWantOrHave === true
                  ? "#3FBAC2"
                  : "#4D606E",
            }}
            containerStyles={styles.buttonContainer}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  divider: {
    borderColor: "#D3D4D8",
    borderStyle: "solid",
    borderWidth: 1,
  },
  card__text: {
    fontFamily: "regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 20,
    color: "#000000",
    letterSpacing: -0.24,
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 10,
  },
  card__text_left: {
    fontFamily: "regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    color: "#4D606E",
  },
  card__text_right__text: {
    fontFamily: "regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 4,
  },

  buttonContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
});
