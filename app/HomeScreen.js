import { Stack } from "expo-router";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#e7e7e7" },
          headerLeft: () => (
            <ScreenHeaderBtn icon={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn icon={images.face} dimension="80%" />
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Rent a car</Text>
        </View>
        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput style={styles.searchInput} placeholder="Search a Car" />
            <View style={styles.searchIconArea}>
              <Image
                source={icons.magnifying_glass}
                resizeMode="contain"
                style={styles.magnifyingIconStyle}
              />
            </View>
          </View>
        </View>
        <View style={styles.typesSection}>
          <Text style={styles.typesTextActive}>All</Text>
          <Text style={styles.typesText}>Suv</Text>
          <Text style={styles.typesText}>Sedan</Text>
          <Text style={styles.typesText}>Mpv</Text>
          <Text style={styles.typesText}>Hatchback</Text>
        </View>
        <View style={styles.listSection}>
          <Text>Most Rented</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingHorizontal: 35,
  },
  headerSection: {
    height: 100,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 40,
  },
  faceImageStyle: {
    width: 50,
  },
  titleSection: {
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    fontFamily: "FontBold",
  },
  searchSection: {
    marginTop: 15,
    justifyContent: "center",
  },
  searchPallet: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  searchInput: {
    width: 245,
    height: 30,
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 30,
    height: 30,
  },
  typesSection: {
    marginTop: 25,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontFamily: "FontBold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontFamily: "FontBold",
    color: "#696969",
  },
});

export default HomeScreen;
