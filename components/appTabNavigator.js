import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExchangeScreen from "../screens/exchangeScreen";
import {AppStackNavigator} from './appStackNavigator';
export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
    },
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarLabel: "Exchange",
    },
  },
});
