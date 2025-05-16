import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Audio',
    price: '$89.99',
    stock: 'In Stock',
    image: require('../../assets/images/icon.png')
  },
  {
    id: '2',
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: '$59.99',
    stock: 'Low Stock',
    image: require('../../assets/images/icon.png')
  },
  {
    id: '3',
    name: 'Smart Watch',
    category: 'Wearables',
    price: '$199.99',
    stock: 'In Stock',
    image: require('../../assets/images/icon.png')
  },
  {
    id: '4',
    name: 'USB-C Cable',
    category: 'Accessories',
    price: '$12.99',
    stock: 'Out of Stock',
    image: require('../../assets/images/icon.png')
  },
];

export default function CustomerPanel() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 mt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center p-5 bg-white shadow-sm">
        <View className="flex-row items-center">
          <Image
            source={require('../../assets/images/icon.png')}
            className="w-10 h-10 mr-3"
          />
          <Text className="text-xl font-bold text-gray-800">Qbox Inventory</Text>
        </View>
        <View className="flex-row">
          <TouchableOpacity className="mr-4">
            <Ionicons name="search-outline" size={24} color="#4b5563" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="shopping-cart" size={22} color="#4b5563" />
            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
              <Text className="text-white text-xs">3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Welcome Banner */}
        <View className="mx-5 mt-5 p-5 bg-indigo-600 rounded-xl">
          <Text className="text-white text-lg font-semibold">Welcome to Qbox!</Text>
          <Text className="text-indigo-100 mt-1">Browse our latest inventory items</Text>
        </View>

        {/* Categories */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className="bg-indigo-100 px-4 py-2 rounded-full mr-3">
              <Text className="text-indigo-700 font-medium">All Items</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full mr-3">
              <Text className="text-gray-700">Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full mr-3">
              <Text className="text-gray-700">Wearables</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full mr-3">
              <Text className="text-gray-700">Accessories</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="text-gray-700">Electronics</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View className="px-5 mt-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold text-gray-800">Featured Products</Text>
            <TouchableOpacity>
              <Text className="text-indigo-600">View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity className="w-48 bg-white rounded-xl mr-4 shadow-sm overflow-hidden">
                <Image source={item.image} className="w-full h-32" resizeMode="cover" />
                <View className="p-3">
                  <Text className="text-gray-800 font-medium">{item.name}</Text>
                  <Text className="text-gray-500 text-sm mt-1">{item.category}</Text>
                  <View className="flex-row justify-between items-center mt-2">
                    <Text className="text-indigo-600 font-bold">{item.price}</Text>
                    <Text className={`text-xs px-2 py-1 rounded-full ${
                      item.stock === 'In Stock' ? 'bg-green-100 text-green-800' :
                      item.stock === 'Low Stock' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.stock}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* All Products */}
        <View className="px-5 mt-6 mb-10">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold text-gray-800">All Products</Text>
            <TouchableOpacity>
              <Text className="text-indigo-600">Filter</Text>
            </TouchableOpacity>
          </View>

          {products.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              className="bg-white rounded-lg p-3 mb-3 flex-row shadow-sm"
              activeOpacity={0.8}
            >
              <Image source={product.image} className="w-16 h-16 rounded-lg" />
              <View className="ml-3 flex-1">
                <Text className="text-gray-800 font-medium">{product.name}</Text>
                <Text className="text-gray-500 text-sm mt-1">{product.category}</Text>
                <View className="flex-row justify-between items-center mt-2">
                  <Text className="text-indigo-600 font-bold">{product.price}</Text>
                  <TouchableOpacity className="bg-indigo-100 p-2 rounded-full">
                    <Feather name="shopping-cart" size={16} color="#4f46e5" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-3 bg-white border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <MaterialIcons name="home" size={24} color="#4f46e5" />
          <Text className="text-indigo-600 text-xs mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Feather name="search" size={24} color="#9ca3af" />
          <Text className="text-gray-400 text-xs mt-1">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Feather name="heart" size={24} color="#9ca3af" />
          <Text className="text-gray-400 text-xs mt-1">Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Feather name="user" size={24} color="#9ca3af" />
          <Text className="text-gray-400 text-xs mt-1">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}