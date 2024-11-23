import { Tabs } from "expo-router";
import { Image } from "react-native";

// Import your PNG icons
const icons = {
  home: require("../../assets/icons/home.png"),
  create: require("../../assets/icons/plus.png"),
  bookmark: require("../../assets/icons/bookmark.png"),
  profile: require("../../assets/icons/profile.png"),
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: true, // Show the tab labels
        tabBarActiveTintColor: "#FFA001", // Active color for both text and icon
        tabBarInactiveTintColor: "#CDCDE0", // Inactive color for both text and icon
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
        },
        headerShown: false, // Hides the header
        tabBarIcon: ({ focused }) => {
          const iconStyle = {
            width: 22,
            height: 22,
            tintColor: focused ? "#FFA001" : "#CDCDE0", // Dynamic icon color
          };
          return <Image source={icons[route.name]} style={iconStyle} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="bookmark" options={{ title: "Bookmark" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
