//página principal
import React, { useState } from 'react';
import { View,StyleSheet, Text, Button, ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';
const img = require ("../imagenes/fondo.jpeg")

function HomeScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  return (
    <ImageBackground source={img}style = {styles.container}>
      <View style={styles.containerflecha}>
        <Image source={require("../imagenes/flecha.png")} style = {styles.flecha}></Image>
      </View>
      <Text style = {styles.texto}>Crear una nueva</Text>
      <Text style = {styles.subtexto}>¿Ya registrado? Entre aqui</Text>

    <View style = {styles.cajainput}>
      <Text style={styles.titulo}>Nombre</Text>
      <TextInput style = {styles.input}
            onChangeText={(text) => setNombre(text)}
            placeholder="Nombre"
            numberOfLines={1}
            maxLength={4}
            value={nombre}
          />
          <Text style={styles.titulo}>Email</Text>
          <TextInput style = {styles.input}
            placeholder="Email"
            maxLength={40}
            selectionColor="fff"
            secureTextEntry={true}
          />
          <Text style={styles.titulo}>Contraseña</Text>
          <TextInput style = {styles.input}
            placeholder="Contraseña"
            maxLength={40}
            selectionColor="fff"
            secureTextEntry={true}
          />
          <Text style={styles.titulo}>DNI</Text>
          <TextInput style = {styles.input}
            placeholder="DNI"
            maxLength={40}
            selectionColor="fff"
            secureTextEntry={true}
          />
    <View style={styles.logos}>
      <Image source={require('../imagenes/facebook.png')} style={styles.imagen}></Image>
      <Image source={require('../imagenes/Google.png')} style={styles.imagen}></Image>
    </View>
    <TouchableOpacity style={styles.containerButton}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Password')}>Registrar</Text>
    </TouchableOpacity>
    </View>
    
    </ImageBackground>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({ //estilos
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    texto: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'#fff'
    },
    Button: {
        marginTop: 10,
    },
    subtexto: {
        color:'#fff',
        fontSize:14,
        marginBottom:20,
    },
    input: {
      backgroundColor:'#FFF',
      width:'95%',
      height:55,
      marginBottom:15,
      borderRadius:12,
      fontSize:16,    
      paddingHorizontal:15,
      opacity: 0.75,
    },
    cajainput: {
      alignItems:'center',
      width:'80%',
      
    },
    containerButton: {
      backgroundColor: 'transparet',  
      borderRadius: 12, 
      borderColor: 'white',
      borderWidth: 2,
      paddingVertical: 9,
      paddingHorizontal: 12,
      width: '80%', 
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    titulo: {
      fontSize: 16,
      marginBottom: 5, 
      color:'#FFF',
      alignSelf: 'baseline',
    },
    logos: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      marginTop: 2,
    },
    imagen: {
      width: 50,
      height: 50,
      marginHorizontal: 8,
      borderRadius: 50, 
    },
    containerflecha: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    flecha: {
      width: 30,  
      height: 30,
      transform: [{ rotate: '180deg' }],
    },
  });
