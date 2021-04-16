import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import ExchangeScreen from "../screens/exchangeScreen";
import ReceiverDetailScreen from "../screens/receiverDetailScreen";
import HomeScreen from "../screens/HomeScreen";

export const AppStackNavigator = createStackNavigator(
    {
      ExchangeObjects: {
        screen: HomeScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
      ReceiverDetails: {
        screen: ReceiverDetailScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: "ExchangeObjects",
    }
  );
  








