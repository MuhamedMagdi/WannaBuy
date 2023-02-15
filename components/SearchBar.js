import { TextInput, View } from "react-native";

export default function SearchBar ({
    search,
    setSearch,
}) {
    return (
        <View className="my-3 flex-row items-center">
            <TextInput 
                inputMode="search"
                value={search}
                placeholder="search"
                onChange={(phrase) => setSearch(phrase.nativeEvent.text)}
                className="block w-11/12 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-black/20 focus:border-black/40"
            />
        </View>
    )
}