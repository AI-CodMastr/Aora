import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import icons from "../constants/icons"

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 6, // Matches Tailwind `space-y-2` equivalent
  },
  title: {
    fontSize: 15, // Matches Tailwind `text-base`
    color: "#CDCDE0", // Matches Tailwind `text-gray-100`
    fontFamily: "sans-serif-medium", // Matches Tailwind `font-pmedium`
    marginBottom: 4,
    left: 6,
  },
  inputContainer: {
    width: "100%",
    height: 62, // Matches Tailwind `h-16`
    paddingHorizontal: 16, // Matches Tailwind `px-4`
    backgroundColor: "#1C1C24", // Matches Tailwind `bg-black-100`
    borderRadius: 12, // Matches Tailwind `rounded-2xl`
    borderWidth: 0.2, // Matches Tailwind `border-2`
    borderColor: "#2E2E38", // Matches Tailwind `border-black-200`
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#FFFFFF", // Matches Tailwind `text-white`
    fontSize: 16, // Matches Tailwind `text-base`
    fontWeight: "600", // Matches Tailwind `font-psemibold`
    fontFamily: "sans-serif-medium",
  },
  icon: {
    width: 24, // Matches Tailwind `w-6`
    height: 24, // Matches Tailwind `h-6`
  },
});

export default FormField;
