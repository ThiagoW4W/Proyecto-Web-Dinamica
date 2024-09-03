import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, buttonText, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import backgroundImage from './imagen/fondo.jpg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => { 
    setErrorMessage('');

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      Alert.alert('Contraseña correcta');
    } else {
      const error = await response.text();
      setErrorMessage(error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Acceso</Text>
      <Text style={styles.subtitle}>Inicia seción para continuar</Text>
      <Text style={styles.nom}>NOMBRE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Text style={styles.contra}>CONTRASEÑA</Text>
      <TextInput 
        style={styles.input}
        placeholder="ingrese su contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <Text style={styles.olvide}>Olvidé mi contraseña</Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ingresar</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
    <Text style={styles.pregunta}>¿No tenes cuenta? Crea una aca!</Text>
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
