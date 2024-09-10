 import { DrawerContentScrollView } from "@react-navigation/drawer"
import React from "react";
 import { TouchableOpacity,StyleSheet,Text,Image,View,Link } from "react-native"
 
 
 export const MenuItems=({navigation})=>{
    const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
    return(
      <DrawerContentScrollView style={Styles.container}  >
        <View style={Styles.box}>
        <TouchableOpacity onPress={()=>navigation.closeDrawer()} >
        <Image  
          style={Styles.icons}
          source={require("../img/cross-small.png")}
          
        />
        </TouchableOpacity>

        <Image
          style={Styles.icons}
          source={require("../img/gear.png")}
          
        />
        </View>
         
        <TouchableOpacity style={Styles.Size} activeOpacity={0.7}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('inicia')}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} >
            <Text style={Styles.button} onPress={()=>navigation.navigate('checklists')}>Checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('boleterias')}>Boleteria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('boleterias')}>Ventas</Text>  
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('boleterias')}>Reservas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('boleterias')}>Zonas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('boleterias')}>Ropero</Text>   
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('boleterias')}>Mercaderia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('boleterias')}>Lista productos</Text>   
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('boleterias')}>Stock</Text>
        </TouchableOpacity>

       
        
      </DrawerContentScrollView>
    )
   }
   const Styles = StyleSheet.create({
    container:{
        width:250,
        height:'300%',
        

        
    },
    box:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        color:'#fff',
        padding:15,
     
        marginTop:'5%',
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    inside:{
        color:'#fff',
        width:'100%',
      
        padding:15,
        
    },
    dropdown:{
        color:'white',
        backgroundColor:'gray',
        textAlign:'right',
        padding:5,
        marginTop:'2%'
    },
    icons:{
      display:'flex',
     
    },
    Size:{
       
    }

  
  
   })
  