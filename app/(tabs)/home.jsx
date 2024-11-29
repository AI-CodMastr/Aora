import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  const [categories, setCategories] = useState([
    { id: "1", name: "Trending Now", selected: true },
    { id: "2", name: "All", selected: false },
    { id: "3", name: "New", selected: false },
  ]);

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Jacket Jeans",
      price: "$45.9",
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWo4wUneoL1B8rkQbYrSWAu7OsitxO_TSCkdW4jyaT6UkaSuy8W8o7hlgavTehUgR3fc&usqp=CAU"),
      isFavorite: false,
    },
    {
      id: "2",
      name: "Acrylic Sweater",
      price: "$37.9",
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-w0eq4adBTNDUrOkK2BjSxk7Mw6VlN_0IQw&s"),
      isFavorite: false,
    },
    {
      id: "3",
      name: "Leather Jacket",
      price: "$85.0",
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3M0m8GV6au1lAUd-AeT0F1I1-EmNJ-zAmQ&s"),
      isFavorite: true,
    },
    {
      id: "4",
      name: "Sunglasses Style",
      price: "$29.9",
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKxVBVcl9SHp7rs0yk1B-5-8fJ-1Oh97xoAVvCGb_0FCT55cbMYJ5TOtMDfr7KULtFhg&usqp=CAU"),
      isFavorite: false,
    }, 
    {
      id: "1",
      name: "Jacket Jeans",
      price: "$45.9",
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWo4wUneoL1B8rkQbYrSWAu7OsitxO_TSCkdW4jyaT6UkaSuy8W8o7hlgavTehUgR3fc&usqp=CAU"),
      isFavorite: false,
    },
    {
      id: "2",
      name: "Acrylic Sweater",
      price: "$37.9",
      image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-w0eq4adBTNDUrOkK2BjSxk7Mw6VlN_0IQw&s"),
      isFavorite: false,
    },
  ]);

  const handleCategorySelect = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.id === id ? { ...cat, selected: true } : { ...cat, selected: false }
      )
    );
  };

  const toggleFavorite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === id ? { ...prod, isFavorite: !prod.isFavorite } : prod
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/apps.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Match Your Style</Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Ellipse2.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              category.selected && styles.selectedCategory,
            ]}
            onPress={() => handleCategorySelect(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                category.selected && styles.selectedCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{uri:item.image}} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity
              onPress={() => toggleFavorite(item.id)}
              style={styles.favoriteIconContainer}
            >
              <Image
                source={
                  item.isFavorite
                    ? require("../../assets/favorite.png")
                    : require("../../assets/favoriteFilled.png")
                }
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F9",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#F1F1F1",
  },
  selectedCategory: {
    backgroundColor: "#FF6C9D",
  },
  categoryText: {
    fontSize: 14,
    color: "#000",
  },
  selectedCategoryText: {
    color: "#FFF",
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    color: "#FF6C9D",
    marginBottom: 10,
  },
  favoriteIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  favoriteIcon: {
    width: 20,
    height: 20,
  },
});
