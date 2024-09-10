import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio'
import Checklist from '../Screens/Checklist'
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
          <Tab.Screen name="Secundario" component={Checklist}
            options={{
              title:"checklist",
            
            }}
          />
        </Tab.Navigator>






    );}

   