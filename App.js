import DrawerNav from './navigation/Drawer';
import TabScreen from './navigation/Tab';
import Registro from './Screens/Registro'
import Inicio from './Screens/Inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from './Screens/login'
export default function App() {
  return (
   
      
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}
         initialRouteName='Login'
         >
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name="Sign-Up" component={Registro} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      
     
    </Stack.Navigator>
    
      </NavigationContainer>
 
  );
}