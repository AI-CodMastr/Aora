import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

export default function SearchBar({ onSearch }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/search.png")} style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
