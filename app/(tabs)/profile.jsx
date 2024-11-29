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
import { Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  const user = {
    name: 'Emma Watson',
    email: 'emma.watson@example.com',
    avatar: require('../../assets/Ellipse2.png'),
    orders: 5,
    wishlist: 12,
    coupons: 3,
  };

  const menuItems = [
    { icon: 'shopping-bag', title: 'My Orders', value: user.orders },
    { icon: 'heart', title: 'Wishlist', value: user.wishlist },
    { icon: 'tag', title: 'Coupons', value: user.coupons },
    { icon: 'map-pin', title: 'Address', value: '' },
    { icon: 'credit-card', title: 'Payment Methods', value: '' },
    { icon: 'help-circle', title: 'Help Center', value: '' },
    { icon: 'log-out', title: 'Logout', value: '' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Feather name="chevron-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit" size={24} color="#FF6B6B" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <Image
            source={user.avatar}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.iconContainer}>
                  <Feather name={item.icon} size={20} color="#FF6B6B" />
                </View>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <View style={styles.menuItemRight}>
                {item.value !== '' && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.value}</Text>
                  </View>
                )}
                <Feather name="chevron-right" size={20} color="#999" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  scrollContent: {
    flexGrow: 1,
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
  editButton: {
    padding: 8,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFE8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#333',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ProfileScreen;
