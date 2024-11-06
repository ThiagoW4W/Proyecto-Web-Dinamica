import React, { useState } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query,} from 'firebase/firestore';
import Toast from 'react-native-toast-message';
const img = require ("../fondo.jpg")
const MAX_DOCS = 8;
function Emergenteropero({navigation}) {
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [apellido, setApellido] = useState('');
    const [numeroRopero, setNumeroRopero] = useState('N°');
    const [estadoRopero, setEstadoRopero] = useState('LIBRE');

    const addRopero = async () => {

        try {
            const querySnapshot = await getDocs(collection(db, 'roperos'));
            const contadorRopero = querySnapshot.size;
            if (contadorRopero < MAX_DOCS) {
              await addDoc(collection(db, 'roperos'), {
                nombre,
                dni,
                apellido,
                numeroRopero,
                estadoRopero
            });
            console.log('Ropero agregado');
          
            Toast.show({
              type: 'success',
              text1: 'Datos cargado!',
              position: 'top',
              visibilityTime: 3000,
          });
            }
            else{
              console.log('Sin espacio');
              Toast.show({
                type: 'error',
                text1: 'No tienes más espacio en los roperos',
                position: 'top',
                visibilityTime: 3000,
            });
            }

            
            // Limpiar los campos después de agregar
            setNombre('');
            setDni('');
            setApellido('');
            setNumeroRopero('N°');
            setEstadoRopero('LIBRE');
        } catch (error) {
            console.error('Error al agregar ropero: ', error);
        }
    };



    return (
        <ImageBackground source={img}style = {styles.container}>
           

          
          <Text style = {styles.texto}>Ropero</Text>
            <View style={styles.caja}>
              
            <View style={styles.label}>
              <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ropero')}>
                <Image  source={require('../img/atras.png')}></Image>
              </TouchableOpacity>
              <Text style={styles.subtitulo}>DATOS DEL ROPERO</Text> 
            </View>
        
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

              <TouchableOpacity onPress={addRopero} style={styles.containerButton} >
                <Text style={styles.buttonText}  >Agregar</Text>
              </TouchableOpacity>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </ImageBackground>
        
    );
}
export default Emergenteropero;
const styles = StyleSheet.create({ 
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
    subtitulo: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',  
    },
    icon:{
      marginLeft: 10
    },
    label: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '120%',
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    roperoContainer: {
      alignItems: 'center',
     
      marginBottom: 20,
      marginTop: 20,
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