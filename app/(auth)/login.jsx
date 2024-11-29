import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to your account</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
