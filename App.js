import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import AddProduct from './screens/AddProduct';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#2b2b2b",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
