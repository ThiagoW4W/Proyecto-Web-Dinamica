import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio'
import BoleteriaMain from '../Screens/BoleteriaMain'
import Checklist from '../Screens/Checklist'
const BolTab = createBottomTabNavigator();
export default function BolTabScreen() {

    return (

        <BolTab.Navigator initialRouteName='Boleterias' screenOptions={()=>({
            headerShown:false,
            
            tabBarStyle:{
              backgroundColor:'black',
              
                
            }
        })}>
            <BolTab.Screen  name="Boleterias" component={BoleteriaMain}
            options={{
              title:"Boleteria",
              
              
            }}
            />
          
          <BolTab.Screen name="Secundario" component={Checklist}
            options={{
              title:"checklist",
             
            }}
          />
          <BolTab.Screen name="Principal" component={Inicio} 
          options={{
            
            title:"inicio",
          
          }}
         />
        </BolTab.Navigator>






    );}
