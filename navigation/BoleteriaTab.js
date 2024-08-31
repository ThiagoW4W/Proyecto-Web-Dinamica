import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio'
import Boleteria from '../Screens/Boleteria'
import Checklist from '../Screens/Checklist'
const BolTab = createBottomTabNavigator();
export default function BolTabScreen() {

    return (

        <BolTab.Navigator initialRouteName='Boleteria' screenOptions={()=>({
            headerShown:false,
            
            tabBarStyle:{
              backgroundColor:'black',
              
                
            }
        })}>
            <BolTab.Screen  name="Boleteria" component={Boleteria}
            options={{
              tabBarIcon:()=>{
                false
              },
              
              title:" ",
              
              
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
