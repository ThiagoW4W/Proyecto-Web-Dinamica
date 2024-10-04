import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Zonas(){
  return (
    <ImageBackground source={require('./imagen/fondo.jpg')} style={styles.fondo}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Zonas</Text>
      </View>
      <View style={styles.degrado}>
        <Text style={styles.flecha}>←</Text>
        <View style={styles.container2}>
          <Image style={styles.stretch} source= {require('./imagen/plano2.jpeg')} />        
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
    backgroundColor:'#ffff',
    alignItems:'center',
    justifyContent: 'flex-start',
    top:'10%',
    marginBottom:100,
    opacity: 0.65,
  },
  container2: {
    display:'flex', 
    width:'80%',
    height:'40%',
    top:'5%',
  },
  flecha: {
    marginRight: '80%', 
    fontSize: 30,
    marginTop: 8,
    marginBottom: -2,
  },
  opciones: {
    display: 'flex',
    marginTop: 8,
    justifyContent: 'center',
    marginTop: 40,
  },
  opcionesTexto:{
    textAlign: 'left',
    fontSize: 20,
    marginLeft: '25%',
  },
  stretch: {
    width:'100%',
    height:'100%',
    marginTop:-20,
  },
})