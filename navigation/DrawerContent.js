 import { DrawerContentScrollView } from "@react-navigation/drawer"
import React from "react";
import {useState,useEffect} from "react";
 import { TouchableOpacity,StyleSheet,Text,Image,View,Modal,Linking } from "react-native"
 import { signOut } from "firebase/auth";
 import { auth,db } from "../firebase/config";
 import { getDoc, doc,setDoc } from 'firebase/firestore';
 
 export const MenuItems=({navigation})=>{
    const [isBoleteriaOpen, setIsBoleteriaOpen] = useState(false);
    const [isMercaderiaOpen, setIsMercaderiaOpen] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [isModalVisible, SetIsModalVisible] = useState(false);
    const [itsModalVisible, SetModalVisible] = useState(false);
    const [itsModalVisible2, SetModalVisible2] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleSelectMethod = (method) => {
        setSelectedMethod(method);
    };
    const handleCallPress=()=>{
        Linking.openURL("tel:+542996083028")
    };
    const handleEmailPress=()=>{
        Linking.openURL("mailto:antonellanairivera@gmail.com")
    }
    const handleVideoPress=()=>{
        Linking.openURL("https://youtu.be/KAHyptnH5dQ?si=KcpvaJokuGrzIIGk")
    }
    const handleConfirm = () => {
        if (selectedMethod==='Telefono'){
           handleCallPress();
        }else{
            handleEmailPress();
        }
        SetModalVisible(false);
    };
    const takeUser = async () => {
        try {
          const user = auth.currentUser;  
          if (user) {
            const userRef = doc(db, 'Users', user.uid);  
            const docSnap = await getDoc(userRef);  
            if (docSnap.exists()) {
              setUserData(docSnap.data());  
            } else {
              console.log("No existe el documento");
            }
          } else {
            console.log("No hay usuario logeado");
          }
        } catch (error) {
          console.error('Error cargar Usuario a la Bd: ', error);
        }
      };
    
      useEffect(() => {
        takeUser();  
      }, []);

  const onSignOut =()=>{
    signOut(auth).catch(error=>console.log(error));
}
    return(
      <DrawerContentScrollView style={Styles.container}  >
        <View style={Styles.box}>
        <TouchableOpacity onPress={()=>navigation.closeDrawer()} >
            <Image  
            style={Styles.icons}
            source={require("../img/cross-small.png")}
            
            />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.box2}>
       <Text style={Styles.color}>Hey! {userData?.nombre}</Text>
       </TouchableOpacity>
        </View>
         
        <TouchableOpacity style={Styles.Size} activeOpacity={0.7}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('inicia')}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size} >
            <Text style={Styles.button} onPress={()=>navigation.navigate('checklists')}>Checklist</Text>
        </TouchableOpacity>

        <View style={Styles.desplegable}  >
            <TouchableOpacity onPress={()=>navigation.navigate('Boleterias')}><Text style={Styles.buttonDesp}>Boleteria</Text></TouchableOpacity>
            <TouchableOpacity style={Styles.img} onPress={() => setIsBoleteriaOpen(!isBoleteriaOpen)}>
                <Image style={Styles.imagen} source={require("../img/flecha-hacia-abajo.png")}/>
            </TouchableOpacity>
        </View>

        {isBoleteriaOpen && (
                
                <View style={Styles.submenu}>
                    <TouchableOpacity style={Styles.Size} onPress={() => navigation.navigate('ventas')}>
                        <Text style={Styles.dropdown}>Ventas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.Size} onPress={() => navigation.navigate('reserva')}>
                        <Text style={Styles.dropdown}>Reservas</Text>
                    </TouchableOpacity>
                </View>
               
            )}
        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('zones')}>Zonas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button} onPress={()=>navigation.navigate('ropero')}>Ropero</Text>   
        </TouchableOpacity>

        <View style={Styles.desplegable}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('mercaderias')}><Text style={Styles.buttonDesp} >Mercaderia</Text></TouchableOpacity>

        </View>


        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('perfil')}>
            <Text style={Styles.button2} >Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={Styles.Size}>
            <Text style={Styles.button2} onPress={()=>SetModalVisible(true)}>Contactanos</Text>
        </TouchableOpacity>
        <Modal visible={itsModalVisible} animationType="slide" transparent={true}>
            <View style={Styles.modalBox}>
                <View style={Styles.modal}>
                    <View style={Styles.TextBox}>
                        <Text style={Styles.textM}>¿Cómo desea contactarnos?</Text>
                        <View style={Styles.position}>
                            <TouchableOpacity
                                style={[Styles.cajita,  selectedMethod === 'Correo' ? {backgroundColor: '#abb2b9'  } : {}]}
                                onPress={() => handleSelectMethod('Correo')}>
                                <Text>Correo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[Styles.cajita, selectedMethod === 'Telefono' ? {backgroundColor: '#abb2b9'  } : {}]}
                                onPress={() => handleSelectMethod('Telefono')}
                            >
                                <Text>Telefono</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.iconos}>
                        <TouchableOpacity onPress={() => SetModalVisible(false)}>
                            <Image source={require("../img/circle-x_10489836.png")} />
                        </TouchableOpacity>
                        {selectedMethod && (
                            <TouchableOpacity onPress={handleConfirm}>
                                <Image source={require("../img/check.png")} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
        <TouchableOpacity style={Styles.Size} onPress={()=>navigation.navigate('ayuda')}>
            <Text style={Styles.button2}>Ayuda</Text>
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
                        <TouchableOpacity onPress={onSignOut} >
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
        width: '100%',
        height:'300%', 
    },
    box:{
        display:'flex',
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        
        color:'#fff',
        padding:15,
     
        marginTop:'5%',
        width:'100%',
        display:'flex',
        textAlign:'center',
       
    },
    inside:{
      
        color:'#fff',
        width:'100%',
      
        padding:15,
        
    },
    dropdown:{
        
        color:'white',
       
        textAlign:'right',
        padding:10,
        marginTop:'2%'
    },
    icons:{

      display:'flex',
     
    },
    Size:{
        width:'100%',
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
        
    },
    submenu:{
        
        backgroundColor:'#212121',
    },
    desplegable:{
        display:'flex',
        
        flexDirection:'row',
        width:'100%',
        color:'#fff',
        padding:15,
        marginTop:'5%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
       
    },
    buttonDesp:{
        textAlign:'center',  
        color:'#fff',
        
    },
    imagen:{
       
   
    },
    img:{
        width:'15%',
        height:'100%',
        left:'35%'
    },
    textoCantero:{
       textAlign:'center'
    },
    color:{
        color:'#fff',
        
    }

  
  
   })
  