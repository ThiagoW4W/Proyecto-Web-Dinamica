import React, { useState } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';

const img = require ("../imagenes/fondo.jpeg")

function Perfil({ navigation }) {
    const [nombre, setNombre] = useState('incial');
    const [dni, setDni] = useState('DNI');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [foto, setFoto] = useState('Foto');

    const handleAgregar = () => {
      // Aquí iría la lógica para manejar la información agregada
      console.log(`DNI: ${dni}, Nombre: ${nombre}, Apellido: ${apellido}`);
  };

    return (
        <ImageBackground source={img}style = {styles.container}>
           <TouchableOpacity onPress={() => navigation.native('')} style={styles.flecha}>
              <Text style={styles.flechita}>←</Text>
          </TouchableOpacity>
          <Text style = {styles.texto}>Perfil</Text>
            <View style={styles.caja}>
            <View style={styles.label}>
            <Text style={styles.label}>PERSONA</Text>
            </View>
            <View style={styles.divider} />
        
            <View style={styles.roperoContainer}>
                    <Text style={styles.foto}>{foto}</Text>  
                  <Text style={styles.Dni}>{dni}</Text>
                  
            </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={setApellido}
                />
                <TextInput
                    style={styles.input}
                    placeholder="DNI"
                    value={dni}
                    onChangeText={setDni}
                />
                 <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                 <TextInput
                    style={styles.input}
                    placeholder="Domicilio"
                    value={domicilio}
                    onChangeText={setDomicilio}
                />
                 <TextInput
                    style={styles.input}
                    placeholder="Restablecer Contraseña"
                    value={contraseña}
                    onChangeText={setContraseña}
                />
              <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('boleteria')}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
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
    divider: {
      width: '115%', 
      height: 1,  
      backgroundColor: '#000', 
      marginTop:-40, 
      marginBottom: 45,
    },
    flecha: {
      top: 86,
      right:140 ,
      padding: 10,
      backgroundColor: 'transparent',
    },
    flechita: {
      fontSize: 24,
      color: '#fff',
    },
    foto: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
      },
    Dni: {
        fontSize: 18,
        color: '#000',
      },
    texto: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: -5,
        color: '#fff',
    },
    caja: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        backgroundColor: '#FFF',
        height: 650,
        marginBottom: 90,
        borderRadius: 12,
        opacity: 0.65,
        padding: 20,
    },
    label: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginTop: -5,
      marginBottom: 20,
    },
    roperoContainer: {
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: '#fff',
      height: 120,
      width:120,
      justifyContent:'center',
      borderRadius: 12,
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 8,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#C0C0C0',
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  
});