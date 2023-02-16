import { TextInput, View } from 'react-native';

export default function SearchBar({ search, setSearch }) {
    return (
        <View className="my-3 flex-row items-center">
            <TextInput
                inputMode="search"
                value={search}
                placeholder="search"
                onChange={(phrase) => setSearch(phrase.nativeEvent.text)}
                className="block w-11/12 px-3 py-2 text-sm text-dark-gray rounded-sm bg-slate-50 boarder border-light-black focus:ring-dark-gray focus:border-dark-gray"
            />
        </View>
    );
}
