import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChatIcon, StarIcon } from "../../assets/svg/OtherIcons";
import { nFormatter } from "../helpers/formatter";
import { ButtonLink } from "./ButtonLink";

interface cardInterface {
  onLikePressed(): void;
  onCommentPressed(): void;
  onCardPress(): void;
  text?: string;
  likeCount?: number;
  isLiked?: boolean;
  commentCount?: number;
  isCommented?: boolean;
}

interface lowerPartInterface {
  onLikePressed(): void;
  onCommentPressed(): void;
  text?: string;
  likeCount?: number;
  isLiked?: boolean;
  commentCount?: number;
  isCommented?: boolean;
}

interface reUsableButton {
  onLikePressed(): void;
  onCommentPressed(): void;
  count?: number;
  buttonType?: string;
  isLiked?: boolean;
  isCommented?: boolean;
}

function ReUsableButton(props: reUsableButton) {
  return (
    <ButtonLink
      nameAfterIcon={nFormatter(props.count ? props.count : 0, 1)}
      onPress={props.onCommentPressed}
      icon={
        props.buttonType === "chat" ? (
          <ChatIcon
            size={22}
            color="#4D606E"
            fill={
              !!props.isCommented && props.isCommented === true
                ? "#3FBAC2"
                : "white"
            }
            stroke={
              !!props.isCommented && props.isLiked === true
                ? "#3FBAC2"
                : "black"
            }
          />
        ) : (
          <StarIcon
            size={22}
            color="#4D606E"
            fill={
              !!props.isLiked && props.isLiked === true ? "#3FBAC2" : "white"
            }
            stroke={
              !!props.isLiked && props.isLiked === true ? "#3FBAC2" : "black"
            }
          />
        )
      }
      style={{
        fontFamily: "regular",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        color:
          !!props.isLiked && props.isLiked === true ? "#3FBAC2" : "#4D606E",
      }}
      containerStyles={{ flexDirection: "row", alignItems: "center" }}
    />
  );
}

function LowerPart(props: lowerPartInterface) {
  return (
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
      <ReUsableButton
        buttonType="like"
        count={props.likeCount}
        isLiked={props.isLiked}
        isCommented={props.isCommented}
        onLikePressed={props.onLikePressed}
        onCommentPressed={props.onCommentPressed}
      />
      <ReUsableButton
        buttonType="chat"
        count={props.commentCount}
        isLiked={props.isLiked}
        isCommented={props.isCommented}
        onLikePressed={props.onLikePressed}
        onCommentPressed={props.onCommentPressed}
      />
    </View>
  );
}

export function HaveWantCard(props: cardInterface) {
  return (
    <TouchableOpacity style={{ ...styles.card }} onPress={props.onCardPress}>
      <Text style={styles.card__text}>{props.text}</Text>
      <View style={styles.divider}></View>
      <LowerPart
        text={props.text}
        likeCount={props.likeCount}
        commentCount={props.commentCount}
        isLiked={props.isLiked}
        isCommented={props.isCommented}
        onLikePressed={props.onLikePressed}
        onCommentPressed={props.onCommentPressed}
      />
    </TouchableOpacity>
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
});
