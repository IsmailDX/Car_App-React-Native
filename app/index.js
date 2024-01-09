import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#e7e7e7" }}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
