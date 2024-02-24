import { Alert, StyleSheet, Text, View } from "react-native";
import Loader from "./components/loader";
import { useState, useEffect } from "react";
import Weather from "./components/weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "d178ff92ccd11d2f6b3854ec3691bc46";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setLocation(data);
    setIsLoading(false);
  };

  const setWeather = async (query) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    setLocation(data);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Joylashuvga kirishga ruxsat berilmadi");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Joylashuv topilmadi");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      setWeather={setWeather}
      temp={Math.round(location.main.temp)}
      name={location.name}
      condition={location.weather[0].main}
    />
  );
}

const styles = StyleSheet.create({});
