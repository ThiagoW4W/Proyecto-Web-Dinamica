import React, { useState,useEffect } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput, TouchableOpacity,Image,Modal} from 'react-native';
import { getDoc, doc,setDoc } from 'firebase/firestore';
import { db,auth } from '../firebase/config';
const img = require ("../fondo.jpg")

function Perfil({ navigation }) {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [editable, setEditable] = useState(false); 
  const [isEditing,SetIsEditing]= useState(false)
  const [userData, setUserData] = useState(null);
  function editar(){
    setEditable(true);
      SetIsModalVisible(false);
      SetIsEditing(true);
  }
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
  const updateUser =async()=>{
    const user = auth.currentUser;  
    if (user) {
    const userRef = doc(db, 'Users', user.uid);  
    await setDoc(userRef, {
      password: 'b432c68e',
      nombre:userData?.nombre || '' ,
      email:userData?.email || '',
      dni:userData?.Dni || ''
    }, { merge: true });

    }
  }
  
 
    return (
        <ImageBackground source={img}style = {styles.container}>
          <Text style={styles.titulo}>Perfil</Text>
           <View style={styles.divider}>
            <TouchableOpacity onPress={() => navigation.navigate('inicia')}><Image source={require("../img/atras.png")}></Image></TouchableOpacity>
            <Text style={styles.texto}>Usuario</Text>
           </View>
           <View style={styles.infoBox}>
              <View style={styles.dev}>
              <TouchableOpacity onPress={()=>SetIsModalVisible(true)} style={styles.icon}><Image source={isEditing ? require("../img/circle-x_10489836.png") : require("../img/edit.png")} /></TouchableOpacity>
              </View>
              <Modal visible={isModalVisible} animationType="slide"
        transparent={true}>
            <View style={styles.modalBox}>
                <View style={styles.modal}>
                    <View style={styles.TextBox}>
                         <Text style={styles.textM}>¿Estás seguro Que deseas </Text>
                         <Text style={styles.textM}>Editar el perfil?</Text>
                    </View>
                    <View style={styles.iconos}>
                        <TouchableOpacity onPress={()=>SetIsModalVisible(false)} >
                            <Image source={require("../img/circle-x_10489836.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={editar} >
                            <Image source={require("../img/check.png")}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
              <View style={styles.imageBox}>
                <View style={styles.whiteBox}>
                     <View style={styles.foto}><Text style={styles.texto2}>Foto</Text></View>
                     <View style={styles.dni}><Text style={styles.texto2} >{userData?.Dni}</Text></View>
                </View>
                
              </View>
              <View style={styles.inputs}>
                <TextInput  editable={editable} style={styles.input}  value={userData?.nombre || ''} placeholder='Nombre' onChangeText={(text) =>setNombre(text)}></TextInput>
                <TextInput  editable={editable} style={styles.input} placeholder='Dni'  value={userData?.Dni || ''} onChangeText={(text) =>setDni(text)}></TextInput>
                <TextInput editable={editable} style={styles.input} placeholder='Email'  value={userData?.email || ''} onChangeText={(text) =>setEmail(text)}></TextInput>
                <TextInput editable={editable} style={styles.input} placeholder='Contraseña' value={userData?.password || ''} onChangeText={(text) =>setPassword(text)}></TextInput>
              </View>
              <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button}  onPress={updateUser}><Text style={styles.texto}>Guardar</Text></TouchableOpacity>
              </View>
           </View>
        </ImageBackground>
        
    );
}
export default Perfil;
const styles = StyleSheet.create({ //estilos
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    divider:{
      width:'80%',
      height:'8%',
      backgroundColor:'rgba(255,255,255,0.7);',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      
    },
    texto:{
      color:'#fff',
      fontSize:20,
      marginLeft:'30%'
    },
    titulo:{
      color:'#fff',
      fontSize:40
    },
    infoBox:{
      width:'80%',
      height:'70%',
      backgroundColor:'rgba(255,255,255,0.7);',
      top:'0.5%',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10
    },
    dev:{
      width:'100%',
      height:'10%',
      alignItems:'flex-end',
      justifyContent:'center',
      
    },
    icon:{
      right:'3%'
    },
    imageBox:{
      width:'100%',
      height:'30%',
      justifyContent:'center',
      alignItems:'center'
    },
    whiteBox:{
      width:'40%',
      height:'80%',
      backgroundColor:'#fff'
    },
    foto:{
      width:'100%',
      height:'65%',
      justifyContent:'center',
      borderBottomColor:'#000',
      borderBottomWidth:1,
      alignItems:'center'
    },
    dni:{
      width:'100%',
      height:'35%',
      justifyContent:'center',
      alignItems:'center'

    },
    texto2:{
      color:'#000',
      fontSize:20,
    },
    inputs:{
      width:'100%',
      height:'45%',
    },
    buttonBox:{
      width:'100%',
      height:'15%',
      backgroundColor:'lightgray',
      alignItems:'center',
      justifyContent:'center',
    },
    button:{
      width:'60%',
      height:'60%',
      justifyContent:'center',
      borderColor:'#fff',
      borderWidth:2,
      borderRadius:20,
     
      
    },
    input:{
      borderBottomColor:'#000',
      borderBottomWidth:1,
      width:'95%',
      height:38
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
});