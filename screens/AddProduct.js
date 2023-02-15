import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const handleProduct = ({ productLink, targetedPrice, navigation }) => {
  console.log(productLink, targetedPrice);
  navigation.navigate("Home");
}

export default function AddProduct({ navigation }) {
  const [productLink, setProductLink] = useState("");
  const [targetedPrice, setTargetedPrice] = useState(0);
  return (
    <SafeAreaView>
        <View className="mt-8">
          <View className="items-center">
            <Text className="text-lg font-bold">Product Link</Text>
            <TextInput 
                value={productLink}
                placeholder="Product Link"
                onChange={(phrase) => setProductLink(phrase.nativeEvent.text)}
                className="block w-11/12 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-black/20 focus:border-black/40"
            />
          </View>
          <View className="items-center pt-4">
            <Text className="text-lg font-bold">Targeted Price</Text>
            <TextInput 
               keyboardType="number-pad"
                value={targetedPrice}
                placeholder="Targeted Price"
                onChange={(phrase) => setTargetedPrice(phrase.nativeEvent.text)}
                className="block w-11/12 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-black/20 focus:border-black/40"
            />
          </View>
          <TouchableOpacity onPress={() => handleProduct({productLink, targetedPrice, navigation})} className="bg-black flex-row justify-center w-11/12 rounded-sm self-center mt-5 p-3">
            <Text className="text-white font-bold">Submit</Text> 
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
