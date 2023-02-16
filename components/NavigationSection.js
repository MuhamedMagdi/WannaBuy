import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NavigationSection() {
    const navigation = useNavigation();
    return (
        <View className="items-center bg-dark-gray">
            <View className="h-14 bg-dark-gray justify-evenly items-center flex-row self-center w-11/12">
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    className="mx-1 flex-1 rounded-sm h-9 justify-center items-center"
                >
                    <MaterialIcons name="home" size={24} color="rgb(248, 250, 252)" />
                </TouchableOpacity>
                <TouchableOpacity 
                    className="mx-1 flex-1 rounded-sm h-9 justify-center items-center"
                >
                <MaterialIcons name="account-circle" size={24} color="rgb(248, 250, 252)" />
                </TouchableOpacity>
                <TouchableOpacity 
                   className="mx-1 flex-1 rounded-sm h-9 justify-center items-center"
                >
                    <MaterialIcons name="settings" size={24} color="rgb(248, 250, 252)" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
