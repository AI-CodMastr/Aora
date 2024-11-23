import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        isLoading && styles.disabled,
        containerStyles,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.indicator}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFA001", // Tailwind `bg-secondary`
    borderRadius: 12, // Tailwind `rounded-xl`
    minHeight: 62, // Tailwind `min-h-[62px]`
    flexDirection: "row", // Tailwind `flex flex-row`
    justifyContent: "center", // Tailwind `justify-center`
    alignItems: "center", // Tailwind `items-center`
  },
  disabled: {
    opacity: 0.5, // Tailwind `opacity-50`
  },
  text: {
    color: "#161622", // Tailwind `text-primary`
    fontWeight: "600", // Tailwind `font-psemibold`
    fontSize: 18, // Tailwind `text-lg`
  },
  indicator: {
    marginLeft: 8, // Tailwind `ml-2`
  },
});
