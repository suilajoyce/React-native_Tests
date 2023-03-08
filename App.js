import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercise1 from './Src/screens/Exercise1';
import Exercise2 from "./Src/screens/Exercise2";
import Exercise3 from "./Src/screens/Exercise3";
import HomeScreen from "./Src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Exercise1: Exercise1,
    Exercise2: Exercise2,
    Exercise3: Exercise3,
  },
  {
    initialRouteName: "Home",
    defaultnavigationOptions: {
      title: "App",
    },
  }
);
export default createAppContainer(navigator);
