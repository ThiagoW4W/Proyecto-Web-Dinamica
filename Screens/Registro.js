//página principal
import React, { useState } from 'react';
import { View,StyleSheet, Text, Button, ImageBackground,TextInput,Image, TouchableOpacity, Alert} from 'react-native';
import { db } from '../firebase/config';
import { collection, addDoc,} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
const img = require ("../fondo.jpg")

function HomeScreen({ navigation }) {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const onHandleSignup=()=>{
    
    if (email !== '' && password !== ''){
      createUserWithEmailAndPassword(auth,email,password)
      .then(()=> {
        console.log('Registro Exitoso :P')
        const addUser = async () => {
          try {
            await addDoc(collection(db, 'Users'), {
              email,
              password
            });
            console.log('Datos cargados a la Base de datos');
            // Limpiar los campos después de agregar
            setEmail('');
            setPassword('');
          } catch (error) {
            console.error('Error cargar Usuario a la BD: ', error);
          }
        };
        
        // Ejecutamos addUser aquí
        addUser();
      })
   
      .catch((err) => {
        let errorMessage;

        switch (err.code) {
          case 'auth/invalid-email':
            errorMessage = "El formato del correo electrónico no es válido.";
            break;
          case 'auth/email-already-in-use':
            errorMessage = "El correo electrónico ya está en uso.";
            break;
          case 'auth/operation-not-allowed':
            errorMessage = "La operación no está permitida.";
            break;
          case 'auth/weak-password':
            errorMessage = "La contraseña es demasiado débil.";
            break;
          default:
            errorMessage = "Error en el registro. Por favor, intenta de nuevo.";
            break;
        }

        Alert.alert("Error de registro", errorMessage);
      });
  } else {
    Alert.alert("Error", "Por favor, completa todos los campos.");
  }
};



  return (
    <ImageBackground source={img}style = {styles.container}>
      <View style={styles.containerflecha}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Image source={require("../img/atras.png")} style = {styles.flecha}></Image></TouchableOpacity>
      </View>
      <Text style = {styles.texto}>Crear una nueva</Text>
      <Text style = {styles.subtexto}>¿Ya registrado? Entre aqui</Text>

    <View style = {styles.cajainput}>
      <Text  style={styles.titulo}>Nombre</Text>
      <TextInput placeholder='Nombre' style = {styles.input}
          
          />
          <Text style={styles.titulo}>Email</Text>
          <TextInput style = {styles.input}
            placeholder='Email'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='email-address'
            autoFocus={true}
            value={email}
            onChangeText={(text) =>setEmail(text)}
          />
          <Text style={styles.titulo}>Contraseña</Text>
          <TextInput style = {styles.input}
          placeholder='contraseña'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
          value={password}
          onChangeText={(text) =>setPassword(text)}
          />
          <Text style={styles.titulo}>DNI</Text>
          <TextInput style = {styles.input}
            placeholder="DNI"
            maxLength={8}
            selectionColor="fff"
          />
    <View style={styles.logos}>
      <TouchableOpacity><Image source={require('../img/facebook.png')} style={styles.imagen}></Image></TouchableOpacity>
      <TouchableOpacity><Image source={require('../img/google.png')} style={styles.imagen}></Image></TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.containerButton} onPress={onHandleSignup} >
          <Text style={styles.buttonText}>Registrar</Text>
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
        color:'#fff',
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

    },
  });
