import React from 'react';
import {useState} from "react";
import { View,StyleSheet, Text, ImageBackground,Image, TouchableOpacity, FlatList} from 'react-native';
const img = require ("../fondo.jpg")

function Ropero({ navigation }) {
    // Estados iniciales para los casilleros
    const [lockers, setLockers] = useState([
        { id: 1, libre: true },
        { id: 2, libre: false },
        { id: 3, libre: true },
        { id: 4, libre: false },
        { id: 5, libre: true },
        { id: 6, libre: true }
    ]);
        const renderLocker = ({ item }) => (
        <View style={[styles.locker, { backgroundColor: item.libre ? '#50C878' : '#FF6347' }]}>
            <Text style={styles.lockerText}>N°</Text>
            <Text style={styles.lockerStatus}>{item.libre ? 'LIBRE' : 'OCUPADO'}</Text>
        </View>
    );
    return (
        <ImageBackground source={img} style={styles.container}>
          <View styles= {styles.titulo}>
              <Text style = {styles.texto}>Ropero</Text>
          </View>
          <View style={styles.cajaderoperos}>
                <FlatList
                    data={lockers}
                    renderItem={renderLocker}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={styles.lockerContainer}
                />
            <View style={styles.botones}>

            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.buttonText} >Ver más</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('emergente')}>
              <Text style={styles.mas} > + </Text>
            </TouchableOpacity>

            </View>
          </View>
          </ImageBackground>
     
      
    );
}
export default Ropero;

const styles = StyleSheet.create({ //estilos
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position:'absolute'
      
    },
    cajaderoperos: {
      display: 'flex',
      flexWrap: 'rap',
      alignItems:'center',
      width:'80%',
      marginTop: -10,
      backgroundColor:'#FFF',
      height:600,
      borderRadius:12,
      fontSize:16, 
      opacity: 0.65,
      justifyContent:'center',
    },
    texto: {
      textAlign: 'center',
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 5,
      color:'#fff',
      width: '100%',
      height: 50,
  },
  imagen: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
    borderRadius: 50, 
    position: 'absolute',
    top: 545,
    left: 85,
    color: '#fff',

  },
  lockerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
},
locker: {
    width: 70,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
},
lockerText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
},
lockerStatus: {
    fontSize: 16,
    color: '#000',
},
  botones:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    gap: 20,
    right:20,
  },
  containerButton: {
    backgroundColor: 'transparet',  
    borderRadius: 12, 
    borderColor: 'white',
    borderWidth: 2,
    paddingVertical: 10,
    width: '65%', 
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  mas: {
    textAlign: 'center',
    backgroundColor: 'transparet',  
    borderRadius: 12, 
    borderColor: 'white',
    borderWidth: 2,
    paddingVertical: 10,
    width: '300%',
    marginBottom: 15,
    alignItems: 'center',
  },

})