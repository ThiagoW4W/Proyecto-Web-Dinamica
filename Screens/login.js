import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, buttonText, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import backgroundImage from '../fondo.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase/config"
export default function Login({navigation}) {
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const onHandleLogin=()=>{
  if (email!=="" && password !==""){
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>console.log("Login Success"))
    .catch((err)=>{
      let errorMessage;
      switch (err.code){
        case 'auth/invalid-email':
            errorMessage = "El formato del correo electrónico no es válido.";
            break;
          case 'auth/user-disabled':
            errorMessage = "Este usuario ha sido deshabilitado.";
            break;
          case 'auth/user-not-found':
            errorMessage = "No se encontró un usuario con ese correo electrónico.";
            break;
          case 'auth/wrong-password':
            errorMessage = "La contraseña es incorrecta.";
            break;
          default:
            errorMessage = "Error de inicio de sesión. Por favor, intenta de nuevo.";
            break;
      }
      Alert.alert("Error de inicio de sesión", errorMessage);
    })
  }else {
    Alert.alert("Error", "Por favor, completa todos los campos.");
  }
 }

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Acceso</Text>
      <Text style={styles.subtitle}>Inicia seción para continuar</Text>
      <Text style={styles.nom}>EMAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su usuario"
        autoCapitalize="none"
        value={email}
        onChangeText={(text)=> setEmail(text)}
        keyboardType="email-address"
        textContentType='emailAddress'
      />
      <Text style={styles.contra}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="ingrese su contraseña"
        secureTextEntry={true}
        autoCapitalize='none'
        value={password}
        textContentType='password'
        onChangeText={(text)=> setPassword(text)}
      />
       <TouchableOpacity onPress={()=>navigation.navigate("password")}><Text style={styles.olvide}>Olvidé mi contraseña</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <Text style={styles.buttonText}>ingresar</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("Registro")}>
    <Text style={styles.pregunta}>¿No tenes cuenta? Crea una aca!</Text>
    </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 7,
    textAlign: 'center',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  pregunta: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginTop: 80,
  },
  nom: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
  },
  contra: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 2,
  },
  olvide: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
    marginBottom: 4,
    marginBottom: 18,
  },
  input: { /// cajas para ingresar usuario y contraseña
    height: 43, 
    width: 200,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 8,
    marginBottom: 16,
    backgroundColor: '#a1a2a2',
  },
  button: { ///boton de ingresar
    height: 40,
    width: 200,
    backgroundColor: '#0000',
    padding: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#fff',
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
