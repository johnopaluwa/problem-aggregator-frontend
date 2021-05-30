import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { HaveWantCard } from "../../components/HaveWantCard";

function Problem({ navigation }: any) {
  const cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(
      <HaveWantCard
        text="Cant find business ideas and the shhd uduud fuud siis diuid suzus dudu shhs"
        likeCount={10}
        isLiked={index % 7 === 0 ? true : false}
        commentCount={5}
        isCommented={index % 9 === 0 ? true : false}
        onLikePressed={() => console.log("1")}
        onCommentPressed={() => navigation.navigate("ProblemChat")}
        onCardPress={() => navigation.navigate("ProblemChat")}
      />
    );
  }

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      {cards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default connect()(Problem);
