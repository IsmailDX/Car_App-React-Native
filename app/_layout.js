import { Tabs } from "expo-router/tabs";
import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import { icons } from "../constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    FontBold: require("../assets/fonts/Rubik-Bold.ttf"),
    FontMedium: require("../assets/fonts/Rubik-Medium.ttf"),
    FontRegular: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name == "HomeScreen") {
              iconName = focused ? icons.homeIcon_active : icons.homeIcon;
            } else if (route.name == "MapScreen") {
              iconName = focused ? icons.mapsIcon_active : icons.mapsIcon;
            } else if (route.name == "SavedScreen") {
              iconName = focused ? icons.savedIcon_active : icons.savedIcon;
            } else if (route.name == "SettingsScreen") {
              iconName = focused
                ? icons.settingsIcon_active
                : icons.settingsIcon;
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
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavIcon: {
    width: 25,
    height: 25,
  },
});
