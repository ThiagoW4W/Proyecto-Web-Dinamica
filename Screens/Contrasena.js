import React, { useState } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';
const img = require ("../imagenes/fondo.jpeg")

function  Contrasena ({ navigation }) {
    const [password, setPassword] = useState('');
    return (
<ImageBackground source={img}style = {styles.container}>
        <View style={styles.containerflecha}>
            <Image source={require("../imagenes/flecha.png")} style = {styles.flecha}></Image>
        </View>
            <Text style = {styles.texto}>Cambiar Contraseña</Text>
            <Text style = {styles.subtexto}>Introduce el correo eléctronico que se encuentra asociado a tu cuenta para cambiar la Contraseña</Text>
    <View style = {styles.cajainput}>
        <Text style={styles.titulo}>Email</Text>
          <TextInput style = {styles.input}
            placeholder="Email"
            maxLength={40}
            selectionColor="fff"
            secureTextEntry={true}
          />
    </View>
    <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Ropero')}>
          <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
</ImageBackground>
    );
}
export default Contrasena;
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
        padding: 10,
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
      marginTop: -10,
      
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
      marginTop: 345,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
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
      titulo: {
        fontSize: 16,
        marginBottom: 5, 
        color:'#FFF',
        alignSelf: 'baseline',
      },
});

