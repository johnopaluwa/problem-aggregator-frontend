import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { ChatCard } from "../../components/ChatCard";

function ProblemChat() {
  const cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(
      <View style={{ marginBottom: 20, marginLeft: 10, marginRight: 50 }}>
        <ChatCard />
      </View>
    );
  }

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      {cards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default connect()(ProblemChat);
