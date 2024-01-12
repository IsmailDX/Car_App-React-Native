import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { ScreenHeaderBtn } from "../components";
import { icons, images } from "../constants";

const InfoScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "white" },
          headerLeft: () => (
            <ScreenHeaderBtn
              icon={icons.back}
              dimension="50%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn icon={icons.dots} dimension="50%" />
          ),
        }}
      />
      <View style={styles.container}>
        <Text>Info</Text>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    paddingHorizontal: 35,
  },
});
