
import Inicio from '../Screens/Inicio'
import Checklist from '../Screens/Checklist'
import Ropero from '../Screens/Ropero'
import BoleteriaTab from '../navigation/BoleteriaTab'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';
import MercaderiaTab  from '../navigation/MercaderiaTab'
import Mercaderia from '../Screens/Mercaderia';
import Boleteria from '../Screens/Boleteria';
import TabScreen from './Tab';
import { MenuItems } from './DrawerContent';
import Stock from '../Screens/Stock';
import NuevoProducto from '../Screens/NuevoProducto'
import Zonas from '../Screens/zonas';
import BoleteriaMain from '../Screens/BoleteriaMain';
import Ventas from '../Screens/Ventas';
import Reservas from '../Screens/Reservas';
import NuevaVenta from '../Screens/NuevaVenta';
const drawer = createDrawerNavigator();
export default function Drawer() {
  return (
     
   
       <drawer.Navigator drawerContent={(props)=> <MenuItems{...props} />}
       
     //diseño Drawer
       screenOptions={{
           drawerStyle:{
             backgroundColor: "#000",
             width:250,
             height:'100%'
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
         component={TabScreen}
         
        
         
         />
           
         <drawer.Screen name="checklists" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"Checklist",
           title:"",
           
         }}
         //Componente: Asignacion con la pantalla
         component={Checklist} />

      
        <drawer.Screen name="Boleterias" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"Boleteria",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={BoleteriaMain} />


         <drawer.Screen name="mercaderias" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"Mercaderia",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Mercaderia} />


         <drawer.Screen name="stocks" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"stock",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Stock} />


         <drawer.Screen name="new" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"Nuevo",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={NuevoProducto} />

      <drawer.Screen name="zones" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"zonas",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Zonas} />
          <drawer.Screen name="bols" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"bols",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Boleteria} />
         
         <drawer.Screen name="ropero" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"ropero",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Ropero} />

        <drawer.Screen name="ventas" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"ventas",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Ventas} />

        <drawer.Screen name="reserva" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"reserva",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={Reservas} />

        <drawer.Screen name="nueva" 
         //Creacion Opcion Checklist
         options={{
           drawerLabel:"nueva",
           title:"",
         }}
         //Componente: Asignacion con la pantalla
         component={NuevaVenta} />
        
          
       </drawer.Navigator>
     
  );}
  
