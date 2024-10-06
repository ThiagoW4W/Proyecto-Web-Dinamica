import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio';
import Mercaderia from '../Screens/Mercaderia';
import BoleteriaMain from '../Screens/BoleteriaMain';
const Tab = createBottomTabNavigator();
export default function TabScreen() {

    return (

        <Tab.Navigator screenOptions={()=>({
            headerShown:false,
            
            tabBarStyle:{
              backgroundColor:'black',
              

            }
        })}>
          <Tab.Screen name="Principal" component={Inicio} 
          options={{
            
            title:"inicio",
          
          }}
         />
          <Tab.Screen name="Secundario" component={Mercaderia}
            options={{
              title:"Mercaderia",
            
            }}
          />
          <Tab.Screen name="Terciario" component={BoleteriaMain}
            options={{
              title:"Boleteria",
            
            }}
          />
        </Tab.Navigator>






    );}

   