import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      {/* Add UI for selecting size, color, and "Add to Cart" */}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
