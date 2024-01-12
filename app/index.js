import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";
import dataset from "../dataset/vehicles.json";

const HomeScreen = () => {
  const [vehicles, setVehicles] = useState(dataset.vehicles);
  const [filteredvehicles, setFilteredVehicles] = useState(dataset.vehicles);
  const router = useRouter();

  const getImage = (id) => {
    if (id == 1) return images.image_v_1;
    if (id == 2) return images.image_v_2;
    if (id == 3) return images.image_v_3;
    if (id == 4) return images.image_v_4;
  };

  const searchVehicles = (keyword) => {
    const lowerCase = keyword.toLowerCase();
    const results = vehicles.filter((vehicle) => {
      return vehicle.make.toLowerCase().includes(lowerCase);
    });
    setFilteredVehicles(results);
  };

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
            <TextInput
              style={styles.searchInput}
              placeholder="Search a Car"
              onChangeText={(text) => searchVehicles(text)}
            />
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
          <Text style={styles.headText}>Most Rented</Text>
          <ScrollView style={styles.elementPallet}>
            {filteredvehicles.map((vehicle) => {
              return (
                <TouchableOpacity
                  style={styles.element}
                  key={vehicle.id}
                  activeOpacity={0.9}
                  onPress={() => {
                    router.push("/InfoScreen");
                  }}
                >
                  <View style={styles.infoArea}>
                    <Text style={styles.infoTitle}>
                      {vehicle.make} {vehicle.model}
                    </Text>
                    <Text style={styles.infoSub}>
                      {vehicle.type}-{vehicle.transmission}
                    </Text>
                    <Text style={styles.infoPrice}>
                      <Text style={styles.infoAmount}>
                        {vehicle.price_per_day}
                      </Text>
                      /day
                    </Text>
                  </View>
                  <View style={styles.imageArea}>
                    <Image
                      source={getImage(vehicle.id)}
                      resizeMode="contain"
                      style={styles.vehicleImage}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    height: 70,
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
  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 20,
    fontFamily: "FontBold",
    marginBottom: 10,
  },
  elementPallet: {
    width: "110%",
    height: 450,
    marginHorizontal: -15,
    paddingHorizontal: 15,
  },
  element: {
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontFamily: "FontBold",
  },
  infoSub: {
    fontSize: 12,
    fontFamily: "FontMedium",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 12,
    color: "#696969",
    fontFamily: "FontBold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontFamily: "FontMedium",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -20,
    width: "140%",
    height: "140%",
  },
});
