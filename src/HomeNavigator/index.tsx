import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Establishments from "./Establishments";
import EstablishmentCreate from "./EstablishmentCreate";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Establishments"
      component={Establishments}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={24} {...{ color }} />
        ),
      }}
    />
    <Tab.Screen
      name="Create"
      component={EstablishmentCreate}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="plus" size={24} {...{ color }} />
        ),
      }}
    />
  </Tab.Navigator>
);
