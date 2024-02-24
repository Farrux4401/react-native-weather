import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f47d34", "#f4bc74"],
    title: "Ajoyib!",
    description: "Kochaga chiq, uyda otirmay",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141e30", "#243b55"],
    title: "Uyda o'tir",
    description: "Kochaga chiqma, uyda otirgin",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Zontik ol",
    description: "Yaxshisi uyda qol, tez orada quyosh chiqadi",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "Kochada yomgir yogyaptii!!",
    description: "Tez orada, Kamalak chiqadi",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Kochada qor yogyaptii!!",
    description: "Kocha judayam sovuq",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Dusty",
    subtitle: "Better close the windows",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "On the street smog :(",
    subtitle: "I do not advise going out unnecessarily",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "There's a snow outside!",
    subtitle: "Dress warmly, make snowmen",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn thing in the fog",
    subtitle: "Do you see what's on the street?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "The clouds",
    description: "Go for a walk, stop staying at home!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setQuery] = useState("");

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.mainContainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color={"white"}
        />
        <View style={styles.name}>
          <Text style={styles.temp}>{temp}°</Text>
          <Text style={styles.temp}> | {name}</Text>
        </View>
      </View>
      {/* <Text>Condition {condition}</Text> */}
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.description}>
          {weatherOptions[condition].description}
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="City"
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Pressable onPress={() => setWeather(query)}>
            <Text style={styles.btn}>Search</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 44,
    color: "white",
    fontWeight: 300,
    marginBottom: 10,
  },
  description: {
    fontSize: 24,
    color: "white",
    fontWeight: 600,
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 20,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  input: {
    width: "70%",
  },
  btn: {
    color: "blue",
    fontWeight: "bold",
  },
});
