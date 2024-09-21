import React, { useState } from 'react';
import { View,StyleSheet, Text, ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';
const img = require ("../imagenes/fondo.jpeg")

function Ropero({ navigation }) {
    const [nombre, setNombre] = useState('');
    return (
        <ImageBackground source={img}style = {styles.container}>
          <View style={styles.containerflecha}>
            <Image source={require("../imagenes/flecha.png")} style = {styles.flecha}></Image>
          </View>
          <Text style = {styles.texto}>Ropero</Text>
          <View>
            
          </View>
        </ImageBackground>
    );
}
export default Ropero;
