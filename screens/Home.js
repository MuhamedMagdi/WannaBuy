import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView className="items-center justify-center bg-gray-100">
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <View className="flex-row justify-between w-11/12 space-x-1">
        <TouchableOpacity className="flex-1 bg-black/90 rounded-sm h-9 justify-center items-center" onPress={() => navigation.navigate("AddProduct")}>
          <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-black/90 rounded-sm h-9 justify-center items-center">
          <Ionicons name="filter-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-black/90 rounded-sm h-9 justify-center items-center">
          <FontAwesome name="sort" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ProductList search={search} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
