import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio'
import Boleteria from '../Screens/Boleteria'
import Checklist from '../Screens/Checklist'
import Mercaderia from '../Screens/Mercaderia';
const BolTab = createBottomTabNavigator();
export default function BolTabScreen() {

    return (

        <BolTab.Navigator initialRouteName='Mercaderia' screenOptions={()=>({
            headerShown:false,
            
            tabBarStyle:{
              backgroundColor:'black',
              
                
            }
        })}>
            <BolTab.Screen  name="merc" component={Mercaderia}
            options={{
              title:"Mercaderia",
              
              
            }}
            />
          
          <BolTab.Screen name="Principals" component={Inicio}
            options={{
              title:"Inicio",
             
            }}
          />
          <BolTab.Screen name="Secundarios" component={Boleteria} 
          options={{
            
            title:"Boleteria",
          
          }}
         />
        </BolTab.Navigator>






    );}