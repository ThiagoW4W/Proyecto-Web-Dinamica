import React, { useState } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';

const img = require ("../imagenes/fondo.jpeg")

function Emergenteropero({navigation}) {
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [apellido, setApellido] = useState('');
    const [numeroRopero, setNumeroRopero] = useState('N°');
    const [estadoRopero, setEstadoRopero] = useState('LIBRE');


    return (
        <ImageBackground source={img}style = {styles.container}>
           <TouchableOpacity onPress={() => navigation.native('')} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style = {styles.texto}>Ropero</Text>
            <View style={styles.caja}>
            <View style={styles.label}>
            <Text style={styles.label}>DATOS DEL ROPERO</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.roperoContainer}>
                  <Text style={styles.roperoNumero}>{numeroRopero}</Text>
                  <Text style={styles.roperoEstado}>{estadoRopero}</Text>
            </View>
                <TextInput
                    style={styles.input}
                    placeholder="DNI"
                    value={dni}
                    onChangeText={setDni}
                />
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

              <TouchableOpacity onPress={() => navigation.navigate('Lista')}  style={styles.containerButton} >
                <Text style={styles.buttonText} >Agregar</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
        
    );
}
export default Emergenteropero;
const styles = StyleSheet.create({ //estilos
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    divider: {
      width: '115%', // o el ancho que desees
      height: 1,     // altura de 1 píxel para que sea una línea delgada
      backgroundColor: '#000', // color de la línea (puedes personalizarlo)
      marginTop:-40, // espacio alrededor de la línea (opcional)
      marginBottom: 45,
    },
    backButton: {
      top: 103,
      right:140 ,
      padding: 10,
      backgroundColor: 'transparent',
    },
    backButtonText: {
      fontSize: 24,
      color: '#fff',
    },
    texto: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    caja: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        backgroundColor: '#FFF',
        height: 550,
        marginBottom: 100,
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
    roperoNumero: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000',
    },
    roperoEstado: {
      fontSize: 18,
      color: '#000',
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
  buttonText: {
    color: 'white',
    fontSize: 16,
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
    marginTop: 65,
  },
  
});
