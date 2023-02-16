import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';

const handleProduct = ({
    productLink,
    targetedPrice,
    value: interval,
    navigation,
}) => {
    console.log(productLink, targetedPrice, interval);
    navigation.navigate('Home');
};

export default function AddProduct({ navigation }) {
    const [productLink, setProductLink] = useState('');
    const [targetedPrice, setTargetedPrice] = useState(0);
    const [open, setOpen] = useState(false);
    const [intervalValue, setIntervalValue] = useState(null);
    const [interval, setInterval] = useState([
        { label: '3 Hours', value: '3' },
        { label: '6 Hours', value: '6' },
        { label: '9 Hours', value: '9' },
        { label: '12 Hours', value: '12' },
        { label: '15 Hours', value: '15' },
        { label: '18 Hours', value: '18' },
        { label: '21 Hours', value: '21' },
        { label: '24 Hours', value: '24' },
    ]);
    return (
        <SafeAreaView>
            <View className="mt-8">
                <View className="items-center">
                    <Text className="text-slate-50 text-lg font-bold">
                        Product Link
                    </Text>
                    <TextInput
                        value={productLink}
                        placeholder="Product Link"
                        onChange={(phrase) =>
                            setProductLink(phrase.nativeEvent.text)
                        }
                        className="block w-11/12 px-3 py-2 text-sm text-dark-gray rounded-sm bg-slate-50 boarder border-light-black focus:ring-dark-gray focus:border-dark-gray"
                    />
                </View>
                <View className="items-center pt-4">
                    <Text className="text-slate-50 text-lg font-bold">
                        Targeted Price
                    </Text>
                    <TextInput
                        keyboardType="number-pad"
                        value={targetedPrice}
                        placeholder="Targeted Price"
                        onChange={(phrase) =>
                            setTargetedPrice(phrase.nativeEvent.text)
                        }
                        className="block w-11/12 px-3 py-2 text-sm text-dark-gray rounded-sm bg-slate-50 boarder border-light-black focus:ring-dark-gray focus:border-dark-gray"
                    />
                </View>
                <View className="items-center pt-4">
                    <Text className="text-slate-50 text-lg font-bold">
                        Check Every
                    </Text>
                    <DropDownPicker
                        open={open}
                        value={intervalValue}
                        items={interval}
                        setOpen={setOpen}
                        setValue={setIntervalValue}
                        setItems={setInterval}
                        showArrowIcon={false}
                        className="rounded-sm"
                        maxHeight={350}
                        textStyle={{
                            fontSize: 14,
                        }}
                        containerStyle={{
                            width: '91.667%',
                        }}
                        placeholder="Select An Interval"
                        placeholderStyle={{
                            color: 'rgba(53, 54, 52, 0.5)',
                        }}
                        dropDownContainerStyle={{
                            backgroundColor: 'rgb(248, 250, 252)',
                            borderRadius: 2,
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() =>
                        handleProduct({
                            productLink,
                            targetedPrice,
                            intervalValue,
                            navigation,
                        })
                    }
                    className="bg-black flex-row justify-center w-11/12 rounded-sm self-center mt-5 p-3"
                >
                    <Text className="text-white font-bold">Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
