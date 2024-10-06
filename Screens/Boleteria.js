import React, { useState } from 'react';
import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image,ScrollView } from 'react-native';


const img = require ("../fondo.jpg")

function Boleteria ({navigation}) {
    return (
        <ImageBackground source={img} style={styles.container}>
        <Text style={styles.titulo}>Boleteria</Text>
        <Text style={styles.texto}>e ingresos</Text>
        
        <View style={styles.box}>
            <View style={styles.image}>
                <TouchableOpacity onPress={() => navigation.navigate('Boleterias')}>
                <Image source={require('../img/left.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.items}>
            <ScrollView style={styles.scrollableView}>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                    
                </View>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                    
                </View>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                    
                </View>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                    
                </View>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                    
                </View>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Nombre</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>2</Text>
                    </View>
                    
                </View>
             
              
                
                
                
                
            </ScrollView>
            </View>
        </View>
        </ImageBackground>
    );
}
export default Boleteria;
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
    backgroundColor:'rgba(255,255,255,0.7);',
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

items:{
width:'100%',
height:'90%',
borderBottomLeftRadius:10,
borderBottomRightRadius:10,



},
item:{
backgroundColor:'black',
width:'100%',
height:40,
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
image:{
   
    width:'100%',
    height:'10%',
    display:'flex',
    justifyContent:'center',
    
    
},
scrollableView:{
  objectFit:'contain',
  width:'100%',
  overflow:''
}


});