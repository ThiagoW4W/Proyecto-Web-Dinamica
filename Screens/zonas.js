import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Zonas(){
  return (
    <ImageBackground source={require('../fondo.jpg')} style={styles.fondo}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Zonas</Text>
      </View>
      <View style={styles.degrado}>
        <View style={styles.flecha}>
          <TouchableOpacity style={styles.icon}>
            <Image  source={require('../img/left.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Image style={styles.stretch} source= {require('../img/plano2.png')} />        
        <View style={styles.opciones}> 
            <Text style={styles.opcionesTexto}>Pasillo</Text>
            <Text style={styles.opcionesTexto}>Planta alta</Text>
            <Text style={styles.opcionesTexto}>Vip</Text>
            <Text style={styles.opcionesTexto}>Barra</Text>
            <Text style={styles.opcionesTexto}>Baño</Text>
            <Text style={styles.opcionesTexto}>Deposito</Text>
            <Text style={styles.opcionesTexto}>Entrada</Text>
            <Text style={styles.opcionesTexto}>Salida de seguridad</Text>
            <Text style={styles.opcionesTexto}>Zona de seguridad</Text>
        </View>

        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
  },
  container: {
    width:'100%',
    height:'10%',
    top:'10%',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    textAlign:'center',
    width:'100%',
    height:'100%',
    textAlignVertical:'center'
  },
  degrado: {
    flex:1,
    width:'80%',
    height:'550%',
    borderRadius: 12,
    backgroundColor:'rgba(255,255,255,0.7);',
    alignItems:'center',
    justifyContent: 'flex-start',
    top:'10%',
    marginBottom:100,
    
  },
  container2: {
    display:'flex', 
    width:'80%',
    height:'40%',
    top:'5%',
  },

  opciones: {
    display: 'flex',
    justifyContent: 'center',
    overflow:'hidden',
    top:'10%',
    height:'100%'
  },
  opcionesTexto:{
   color:'#000',
    fontSize: 15,
    marginLeft: '25%',
    objectFit:'cover'
  },
  stretch: {
    width:'100%',
    height:'100%',
  },
  flecha:{
    height:'10%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
  
    
  },  
  icon:{
     left:'2%'
  }
})