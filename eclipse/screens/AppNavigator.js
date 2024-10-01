import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import Contrasena from './Contrasena.js';
import Ropero from './Ropero.js'; 

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign Up">
                <Stack.Screen name="Sign Up" component={HomeScreen} />
                <Stack.Screen name="Password" component={Contrasena} /> 
                <Stack.Screen name="Ropero" component={Ropero} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;
