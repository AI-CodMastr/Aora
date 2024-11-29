import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('grey');

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'grey', code: '#BBC4C2' },
    { name: 'red', code: '#E57373' },
    { name: 'blue', code: '#64B5F6' },
    { name: 'brown', code: '#A1887F' },
    { name: 'green', code: '#81C784' },
    { name: 'black', code: '#212121' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Ellipse2.png')}
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWo4wUneoL1B8rkQbYrSWAu7OsitxO_TSCkdW4jyaT6UkaSuy8W8o7hlgavTehUgR3fc&usqp=CAU" }}
        style={styles.productImage}
      />

      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Winter Coat</Text>
          <Text style={styles.price}>$65.9</Text>
        </View>

        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSize,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Colors</Text>
        <View style={styles.colorContainer}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color.name}
              style={[
                styles.colorButton,
                { backgroundColor: color.code },
                selectedColor === color.name && styles.selectedColor,
              ]}
              onPress={() => setSelectedColor(color.name)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  sizeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  selectedSize: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
  },
  selectedSizeText: {
    color: '#fff',
  },
  colorContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: '#000',
  },
  addToCartButton: {
    backgroundColor: '#F87171',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

