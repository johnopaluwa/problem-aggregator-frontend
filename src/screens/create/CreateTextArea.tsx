import React from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { ButtonLink } from "../../components/ButtonLink";

const { height, width } = Dimensions.get("window");

function CreateTextArea({ navigation }: any) {
  return (
    <View>
      <TextInput
        multiline={true}
        numberOfLines={6}
        style={{
          margin: 12,
          backgroundColor: "#E5E8EE",
          textAlignVertical: "top",
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <ButtonLink
          onPress={() => navigation.navigate("Create")}
          name="Create"
          containerStyles={{
            backgroundColor: "#3FBAC2",
            flexDirection: "row",
            borderRadius: 4,
            padding: 20,
            marginRight: 10,
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default connect()(CreateTextArea);
