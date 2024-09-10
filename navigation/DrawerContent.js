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
         
        <TouchableOpacity style={Styles.Size } onPress={()=>navigation.navigate('inicia')} activeOpacity={0.7}>
            <Text style={Styles.button} >Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('checklists')}>
            <Text style={Styles.button} >Checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.button} >Boleteria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.dropdown} >Ventas</Text>  
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.dropdown} >Reservas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.button} >Zonas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.button} >Ropero</Text>   
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}> 
            <Text style={Styles.button} >Mercaderia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.dropdown} >Lista productos</Text>   
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('boleterias')}>
            <Text style={Styles.dropdown} >Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.Size}>
       
        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('inicia')}>
            <Text style={Styles.buttonstop} >Ayuda</Text>   
        </TouchableOpacity>
        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('inicia')}>
            <Text style={Styles.buttons1} >Contactanos</Text>   
        </TouchableOpacity>
        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('inicia')}>
            <Text style={Styles.buttons1} >Perfil</Text>   
        </TouchableOpacity>
        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('Login')}>
            <Text style={Styles.buttons} >Cerrar sesion</Text>   
        </TouchableOpacity>
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
    buttons1:{
        color:'white',
        padding:10,
        marginTop:'0%',
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    buttons:{
        color:'red',
        padding:10,
        marginTop:'2%',
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    buttonstop:{
        color:'white',
        padding:10,
        marginTop:'30%',
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    button:{
        color:'#fff',
        padding:15,
     
        marginTop:'2%',
        width:'100%',
        display:'flex',
        textAlign:'center',
        marginBottom:'1%'
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
  