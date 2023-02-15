import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView className="items-center justify-center bg-gray-100">
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <ProductList search={search} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
