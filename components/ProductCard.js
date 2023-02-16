import { Image, Linking, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const openUrl = (url) => Linking.canOpenURL(url).then(() => {
    Linking.openURL(url)
})

const formatNumber = (inputNumber) => {
    let formattedNumber=(Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const splitArray=formattedNumber.split('.');
    if(splitArray.length>1){
      formattedNumber=splitArray[0];
    }
    return(formattedNumber);
};

export default function ProductCard({
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
    <View className="bg-dark-gray rounded-sm px-4 py-3 my-2">
        <View className="rounded-xl">
            <Image
                source={{uri: image}}
                className="w-full h-72 rounded-sm"
                style={{resizeMode:"contain"}}
            />
        </View>
        <View className="mt-5">
            <View className="flex-row justify-between">
                <Text className="text-xs font-light text-gray-400">{from}</Text>
                <View className="flex-row items-center">
                    <Ionicons name="time-outline" size={12} color="rgb(156, 163, 175)" />
                    <Text className="pl-1 text-xs font-light text-gray-400">{moment(new Date(lastChecked)).fromNow()}</Text>
                </View>
            </View>
            <Text numberOfLines={2} className="text-slate-50 pt-1 text-lg font-semibold leading-5">{title}</Text>
            <View className="flex-row self-center justify-between pt-3 divide-x divide-gray-200">
                <View className="items-center px-3 w-1/2">
                    <Text className="text-gray-300">Current Price</Text>
                    <View className="flex-row">
                        <Text className="text-slate-50 text-xs font-semibold leading-4">EGP</Text>
                        <Text className="text-slate-50 font-bold text-3xl">{formatNumber(price)}</Text>
                    </View>
                </View>
                <View className="items-center px-3 w-1/2">
                    <Text className="text-gray-300">Targeted Price</Text>
                    <View className="flex-row">
                        <Text className="text-slate-50 text-xs font-semibold leading-4">EGP</Text>
                        <Text className="text-slate-50 font-bold text-3xl">{formatNumber(targetedPrice)}</Text>
                    </View>
                </View>
            </View>
            {
                (availability) ? 
                <TouchableOpacity onPress={() => openUrl(url)} className="bg-light-black flex-row justify-center w-full rounded-sm self-center mt-5 p-3">
                    <Text className="text-white font-bold">Buy Now</Text> 
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => openUrl(url)} className="bg-light-red flex-row justify-center w-full rounded-sm self-center mt-5 p-3">
                    <Text className="text-white font-bold">Out Of Stock</Text> 
                </TouchableOpacity>
            }
        </View>
    </View>
  );
}