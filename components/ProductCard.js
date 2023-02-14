import { FlatList, Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

const openUrl = (url) => Linking.canOpenURL(url).then(() => {
    Linking.openURL(url)
})

export default function ProductCard({
    id,
    title,
    url,
    from,
    image,
    price,
    targetedPrice,
    lastChecked,
    availability
}) {
  return (
    <View className="w-full bg-white rounded-3xl p-5 my-5">
        <View className="bg-white rounded-xl">
            <Image
                source={{uri: image}}
                className="w-full h-72"
                style={{resizeMode:"contain"}}
            />
        </View>
        <View className="mt-5">
            <Text className="text-lg font-bold leading-5">{title}</Text>
            {
                (availability) ? 
                <TouchableOpacity onPress={() => openUrl(url)} className="bg-black flex-row justify-center w-10/12 rounded-xl self-center mt-5 p-3">
                    <Text className="text-white font-bold">Buy Now</Text> 
                </TouchableOpacity> :

                <View className="bg-red-800 flex-row justify-center w-10/12 rounded-xl self-center mt-5 p-3">
                    <Text className="text-white font-bold">Out Of Stock</Text> 
                </View>
            }
        </View>
    </View>
  );
}