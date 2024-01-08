import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#e7e7e7",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
