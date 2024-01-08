import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#e7e7e7" }}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
