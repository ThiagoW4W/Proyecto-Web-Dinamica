import React, { useState } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput, TouchableOpacity,Image,Modal} from 'react-native';


const img = require ("../fondo.jpg")

function Perfil({ navigation }) {

    return (
        <ImageBackground source={img}style = {styles.container}>
          <Text style={styles.titulo}>Blacklist</Text>
           <View style={styles.divider}>
            <TouchableOpacity onPress={() => navigation.navigate('Boleterias')}><Image source={require("../img/atras.png")}></Image></TouchableOpacity>
            <Text style={styles.texto}>Persona</Text>
           </View>
           <View style={styles.infoBox}>
              
              <View style={styles.imageBox}>
                <View style={styles.whiteBox}>
                     <View style={styles.foto}><Text style={styles.texto2}>N° Dni</Text></View>
                     <View style={styles.dni}><Text style={styles.texto2}>Inicial</Text></View>
                </View>
                
              </View>
              <View style={styles.inputs}>
                <TextInput  editable={true} style={styles.input}>Nombre</TextInput>
                <TextInput  editable={true} style={styles.input}>Apellido</TextInput>
                <TextInput  editable={true} style={styles.input}>Dni</TextInput>
                <TextInput editable={true} style={styles.input}>Género</TextInput>
                <TextInput editable={true} style={styles.input}>Edad</TextInput>
                <TextInput editable={true} style={styles.input}>Descripción</TextInput>
              </View>
              <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button}><Text style={styles.texto}>Guardar</Text></TouchableOpacity>
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
      left:'5%',
      alignItems:'center'

    },
    texto2:{
      color:'#000',
      fontSize:20,
      alignItems:'center',
      justifyContent:'center'
    },
    inputs:{
      width:'100%',
      height:'55%',
    },
    buttonBox:{
      width:'100%',
      height:'15%',
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
   
});