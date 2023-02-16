import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import ControlButtons from '../components/ControlButtons';

export default function Home({ navigation }) {
    const [search, setSearch] = useState('');
    return (
        <SafeAreaView className="items-center justify-center bg-light-black">
            <SearchBar search={search} setSearch={setSearch} />
            <ControlButtons navigation={ navigation } />
            <ProductList search={search} />
        </SafeAreaView>
    );
}
