 import { DrawerContentScrollView } from "@react-navigation/drawer"
import React from "react";
import {useState} from "react";
 import { TouchableOpacity,StyleSheet,Text,Image,View,Link,Modal } from "react-native"
 
 
 export const MenuItems=({navigation})=>{
    const [visible, setVisible] = React.useState(false);
    const [isModalVisible, SetIsModalVisible] = useState(false);
    const [itsModalVisible, SetModalVisible] = useState(false);
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
            <Text style={Styles.button} onPress={()=>navigation.navigate('Boleterias')}>Boleteria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('Boleterias')}>Ventas</Text>  
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('Boleterias')}>Reservas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('zones')}>Zonas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('ropero')}>Ropero</Text>   
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('mercaderias')}>Mercaderia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('Boleterias')}>Lista productos</Text>   
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.dropdown} onPress={()=>navigation.navigate('Boleterias')}>Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button2} onPress={()=>navigation.navigate('boleterias')}>Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button2} onPress={()=>SetModalVisible(true)}>Contactanos</Text>
        </TouchableOpacity>
        <Modal visible={itsModalVisible} animationType="slide"
        transparent={true}>
            <View style={Styles.modalBox}>
                <View style={Styles.modal}>
                    <View style={Styles.TextBox}>
                         <Text style={Styles.textM}>¿Cómo desea contactarnos? </Text>
                        <View style={Styles.position}>
                            <TouchableOpacity style={Styles.cajita}>
                                <Text>Correo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.cajita}>
                                <Text>Telefono</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.iconos}>
                        <TouchableOpacity onPress={()=>SetModalVisible(false)} >
                            <Image source={require("../img/circle-x_10489836.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require("../img/check.png")}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button2} onPress={()=>navigation.navigate('boleterias')}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.Size} onPress={()=>SetIsModalVisible(true)}>
            <Text style={Styles.button3} >Cerrar Sesión</Text>
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide"
        transparent={true}>
            <View style={Styles.modalBox}>
                <View style={Styles.modal}>
                    <View style={Styles.TextBox}>
                         <Text style={Styles.textM}>¿Estás seguro Que deseas </Text>
                         <Text style={Styles.textM}>Cerrar Sesión?</Text>
                    </View>
                    <View style={Styles.iconos}>
                        <TouchableOpacity onPress={()=>SetIsModalVisible(false)} >
                            <Image source={require("../img/circle-x_10489836.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require("../img/check.png")}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
       
        
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
       
    },
    button2:{
        color:'#fff',
        padding:10,
     
        marginTop:'2%',
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    button3:{
        color:'red',
        padding:10,
     
        marginTop:'2%',
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    modal:{
        width:'90%',
        height:'25%',
        backgroundColor:'lightgray',
        borderRadius:10,
        
         alignItems:'center',
        display:'flex',
        justifyContent:'space-between'
    },
    modalBox:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
        
        
        
    },
    textM:{
        fontSize:15
    },
    TextBox:{
       marginTop:'5%',
        width:'80%',
        height:'30%',
        display:'flex',
        alignItems:'center'
    },
    iconos:{
    
        width:'40%',
        height:'20%',
        bottom:'5%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

       
    },
    cajita:{
        padding:15,
        borderColor:'white',
        borderWidth:1,
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        
    },
    position:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        top:'8%',
        
    }

  
  
   })
  