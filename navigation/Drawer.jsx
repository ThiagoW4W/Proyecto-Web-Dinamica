
import Inicio from '../Screens/Inicio'
import Checklist from '../Screens/Checklist'
import Boleteria from '../Screens/Boleteria'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BolTabScreen from '../navigation/BoleteriaTab'
import TabScreen from './Tab';
const drawer = createDrawerNavigator();
export default function Drawer() {
  return (
     
   
       <drawer.Navigator initialRouteName="Inicio" 
       
     //diseño Drawer
       screenOptions={{
           drawerStyle:{
             backgroundColor: "#000",
             width:250,
           },
           headerStyle:{
             backgroundColor:"#000"
           },
           headerTintColor:"white",
           headerTitleStyle:{
             fontWeight:"bold"
           },
           drawerActiveTintColor: "#fff",
           drawerInactiveTintColor:"#fff"
       }}
       
       >
            


         <drawer.Screen name="inicia"
         //Creacion Opcion Inicio
         options={{
           drawerLabel:"Inicio",
           title:"",
           
         
         }}
         //Componente: Asignacion con la pantalla
         component={TabScreen}  />

         <drawer.Screen name="checklists" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"Checklist",
           title:"",
           
         }}
         //Componente: Asignacion con la pantalla
         component={Checklist} />

      
        <drawer.Screen name="boleterias" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"Boleteria",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={BolTabScreen} />
          
        
          
       </drawer.Navigator>
     
  );}
