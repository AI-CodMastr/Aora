import React from "react";
import { Image } from "react-native";
import { Tabs } from "expo-router";

const icons = {
  home: require("../../assets/home.png"),       // Path to Home icon
  profile: require("../../assets/account.png"), // Path to Profile icon
  menu: require("../../assets/reorder.png"),     // Path to Cart icon
  myCart: require("../../assets/shopping_cart.png"),     // Path to Cart icon
};

const Layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const iconStyle = {
            width: 24,
            height: 24,
            tintColor: focused ? "#e96e6e" : "#CDCDE0", // Dynamic color
          };
          return <Image source={icons[route.name]} style={iconStyle} />;
        },
      })}
    >
      <Tabs.Screen name="home" title="Home"  />
      <Tabs.Screen name="menu" title="Menu" />
      <Tabs.Screen name="myCart" title="My Cart" />
      <Tabs.Screen name="profile" title="Profile" />

    </Tabs>
  );
};

export default Layout;
