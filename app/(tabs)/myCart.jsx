import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CartScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Sun Glasses',
      price: 37.9,
      size: 'L',
      color: '#6E8FDC',
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKxVBVcl9SHp7rs0yk1B-5-8fJ-1Oh97xoAVvCGb_0FCT55cbMYJ5TOtMDfr7KULtFhg&usqp=CAU"),
    },
    {
      id: 2,
      name: 'Leather Jacket',
      price: 35.9,
      size: 'M',
      color: '#E57697',
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3M0m8GV6au1lAUd-AeT0F1I1-EmNJ-zAmQ&s"),
    },
    {
      id: 3,
      name: 'Acrylic Sweater',
      price: 45.9,
      size: 'M',
      color: '#333333',
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-w0eq4adBTNDUrOkK2BjSxk7Mw6VlN_0IQw&s"),
    },
  ];

  const shipping = 0.0;
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = total + shipping;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} accessibilityLabel="Go back">
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <Image
          source={require('../../assets/Ellipse2.png')}
          style={styles.profileImage}
        />
      </View>

      <ScrollView style={styles.cartItemsContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(1)}</Text>
              <View style={styles.productDetails}>
                <View style={[styles.colorCircle, { backgroundColor: item.color }]} />
                <Text style={styles.sizeText}>{item.size}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.deleteButton} accessibilityLabel={`Remove ${item.name} from cart`}>
              <Ionicons name="close" size={24} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total:</Text>
          <Text style={styles.summaryValue}>${total.toFixed(1)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping:</Text>
          <Text style={styles.summaryValue}>${shipping.toFixed(1)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Grand Total:</Text>
          <Text style={styles.summaryValue}>${grandTotal.toFixed(1)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton} accessibilityLabel="Proceed to checkout">
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  cartItemsContainer: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  sizeText: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    padding: 8,
  },
  summary: {
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutButton: {
    backgroundColor: '#FF6B6B',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CartScreen;

