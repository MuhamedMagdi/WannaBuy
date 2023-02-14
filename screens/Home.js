import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <ProductList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
