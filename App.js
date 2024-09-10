import DrawerNav from './navigation/Drawer';
import TabScreen from './navigation/Tab';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
   
      
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}
         initialRouteName='Inicio'
         >
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      
     
    </Stack.Navigator>
    
      </NavigationContainer>
 
  );
}