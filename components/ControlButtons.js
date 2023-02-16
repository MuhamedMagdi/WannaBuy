import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function ControlButtons({ navigation }) {
    return (
        <View className="flex-row justify-between w-11/12 space-x-1">
            <TouchableOpacity
                className="flex-1 bg-dark-gray rounded-sm h-9 justify-center items-center"
                onPress={() => navigation.navigate('AddProduct')}
            >
                <Entypo name="plus" size={24} color="rgb(248, 250, 252)" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-dark-gray rounded-sm h-9 justify-center items-center">
                <Ionicons
                    name="filter-sharp"
                    size={24}
                    color="rgb(248, 250, 252)"
                />
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-dark-gray rounded-sm h-9 justify-center items-center">
                <FontAwesome name="sort" size={24} color="rgb(248, 250, 252)" />
            </TouchableOpacity>
        </View>
    );
}
