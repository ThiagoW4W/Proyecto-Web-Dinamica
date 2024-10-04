import React, { useState } from 'react';
import { StyleSheet,View,ImageBackground,Text,TouchableOpacity } from 'react-native';
import AppNavigator from './AppNavigator';

const img = require ("../imagenes/fondo.jpeg")

function boleteria ({navigation}) {
    return (
        <ImageBackground source={img} style={styles.container}>
        <Text style={styles.titulo}>Boleteria</Text>
        <Text style={styles.texto}>e ingresos</Text>
        
        <View style={styles.box}>
            <View style={styles.navSup}>
            </View>
            <View style={styles.items}>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                </View>
                
            </View>
        </View>
        </ImageBackground>
    );
}
export default boleteria;
const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
},
box:{
    width:'70%',
    height:'80%',
    backgroundColor:'white',
    opacity: 0.7,
    top:20,
    borderRadius:10,
},
titulo:{
color:'white',
fontSize:30,
},
texto:{
color:'white',
top:10,
},
navSup:{
width:'100%',
height:'10%',
borderTopStartRadius:10,
borderTopEndRadius:10,
borderBottomWidth:3,
borderColor:'black',
borderStyle:'solid',
alignItems:'center',
flexDirection:'row',
justifyContent:'space-around'
},
items:{
width:'100%',
height:'80%',
borderBottomLeftRadius:10,
borderBottomRightRadius:10,

},
item:{
backgroundColor:'black',
width:'100%',
height:'10%',
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',
marginTop:'5%'
},
circle:{
width:'13%',
height:'85%',
backgroundColor:'white',
borderRadius:20,

},
object:{
width:'35%',
height:'85%',
backgroundColor:'white',
borderRadius:20,
display:'flex',
justifyContent:'center',
alignItems:'center',
},
position:{
    width:'100%',
height:'100%',
position:'relative',
display:'flex',
marginLeft:'65%'
},
myText:{
borderStyle:'solid',
borderColor:'white',
borderBottomWidth:2,
color:'white',

},
Text:{
    color:'black',
    borderBottomColor:'white',
    borderBottomWidth:2
},


});