import { Tabs } from "expo-router/tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";

const homeIcon_active = require("../assets/icons/home-active.png");
const homeIcon = require("../assets/icons/home.png");
const mapsIcon_active = require("../assets/icons/compass-active.png");
const mapsIcon = require("../assets/icons/compass.png");
const savedIcon_active = require("../assets/icons/saved-active.png");
const savedIcon = require("../assets/icons/saved.png");
const settingsIcon_active = require("../assets/icons/settings-active.png");
const settingsIcon = require("../assets/icons/settings.png");

const Layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name == "HomeScreen") {
            iconName = focused ? homeIcon_active : homeIcon;
          } else if (route.name == "MapScreen") {
            iconName = focused ? mapsIcon_active : mapsIcon;
          } else if (route.name == "SavedScreen") {
            iconName = focused ? savedIcon_active : savedIcon;
          } else if (route.name == "SettingsScreen") {
            iconName = focused ? settingsIcon_active : settingsIcon;
          }

          return (
            <Image
              source={iconName}
              resizeMode="contain"
              style={styles.NavIcon}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          padding: 20,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          href: "/HomeScreen",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="MapScreen"
        options={{
          href: "/MapScreen",
        }}
      />

      <Tabs.Screen
        name="SavedScreen"
        options={{
          href: "/SavedScreen",
        }}
      />

      <Tabs.Screen
        name="SettingsScreen"
        options={{
          href: "/SettingsScreen",
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  NavIcon: {
    width: 25,
    height: 25,
  },
});
