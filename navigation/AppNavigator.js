import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

import LoginScreen from '../screens/LoginScreen';
import ProductScreen from '../screens/ProductScreen';
import SignUpScreen from '../screens/SignUpScreen';




const Stack = createNativeStackNavigator();


const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
);
export default AppNavigator;