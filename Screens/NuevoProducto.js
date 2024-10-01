import { StyleSheet,View,ImageBackground,Text,Image,TouchableOpacity,TextInput, } from 'react-native';
import * as React from 'react';
import { Button, Checkbox } from 'react-native-paper';
const image= require("./../fondo.jpg")

export default function AñadirProd({navigation}) {
    const toggleCheckbox = (checkbox) => {
        if (checkbox === 'uno') {
            setChecked(true);
            setChecked2(false);
        } else {
            setChecked(false);
            setChecked2(true);
        }
        }
    const [checked, setChecked, unchecked] = React.useState(false);
    const [checked2, setChecked2, unchecked2] = React.useState(false);
   
    return (
       
        <ImageBackground source={image} style={styles.container}>
           <Text style={styles.titulo}>Mercaderia</Text>
           <Text style={styles.texto}>Productos</Text>
           <View style={styles.box}>
            <View style={styles.navSup}>
            <TouchableOpacity onPress={() => navigation.navigate('mercaderias')}><Image source={require("../img/left.png")} style = {styles.imagen}></Image></TouchableOpacity>
            <Text style={styles.text}>Nuevo Producto</Text>
            </View>
            <View style={styles.producto}>
                <View style={styles.position}>
                    <View style={styles.cajita}>
                        <View style={styles.name}>
                            <Text>Nombre </Text>
                        </View>
                        <View style={styles.precio}>
                            <Text>$</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inp}>
                    <Text>Nombre del producto</Text>
                    <TextInput style={styles.input} placeholder='Here'></TextInput>
                    <Text>Precio del producto</Text>
                    <TextInput style={styles.input} placeholder='Here'></TextInput>
                    <View style={styles.caja}>
                        <Text>Stock</Text>
                        <TextInput style={styles.input} placeholder='Here'></TextInput>
                    </View>
                <View style={styles.filtro}>
                    <Text>Con alcohol</Text>
                    <Checkbox name='uno'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                    toggleCheckbox('uno')
                    }}
                        />
                    <Text>Sin alcohol</Text>
                        <Checkbox 
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                        
                        toggleCheckbox('dos')
               
                    }}
                        />
                </View>
                   
                    <View style={styles.positionWidth}>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.boton}>Guardar</Text>
                    </TouchableOpacity>
                    </View>
                    
                   
                    
                    
                </View>
            </View>
                
           
            </View>
        </ImageBackground>
        
    
   
    
       

    );
}

const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'auto',
    height:'100%',
    

},
titulo:{
    color:'white',
    fontSize:30,
    top:-30
    
    },
    texto:{
    color:'white',
    top:-20,
    },

box:{
    width:'70%',
    height:'80%',
    backgroundColor:'white',
    opacity: 0.7,
    top:20,
    borderRadius:10,
},
navSup:{
    width:'100%',
    height:'12%',
    borderTopStartRadius:10,
    borderTopEndRadius:10,
    borderBottomWidth:3,
    borderColor:'black',
    borderStyle:'solid',
    alignItems:'center',
    flexDirection:'row',
   
    

    },
    text:{
       left:'130%',
       color:'white'
    },
    producto:{
      
        width:'100%',
        height:'90%',
        

    },
    position:{
        display:'flex',
        width:'100%',
        height:'30%',
       
        marginTop:'2%',
        justifyContent:'center',
        alignItems:'center'

    },
    cajita:{
        width:'50%',
        height:'90%',
        backgroundColor:'white',
        
        
    },
    name:{
        
        width:'100%',
        height:'70%',
        borderBottomColor:'black',
        borderBottomWidth:2,
        borderStyle:'dashed',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    precio:{
        display:'flex',
        top:'5%',
        left:'2%'
    },
    inp:{
        width:'100%',
        height:'57%',
        top:'2%',
        
      
    },
    input:{
        borderStyle:'dashed',
        borderColor:'black',
        borderBottomWidth:1,
        width:'100%',
        height:'14%',
        top:'2%',
        color:'black',
        marginBottom:'10%',
        marginTop:5,
        
    },
    filtro:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        top:-50,
    
    },
    positionWidth:{
        width:'100%',
        height:'15%',
        top:-50,
        alignItems:'center',
        display:'flex'
    },
    button:{
        height: 40,
        width: 100,
       display:'flex', 
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        
      
    },
    boton:{
        color: '#fff', 
        fontSize: 16,
       
    },
    caja:{
        display:'flex',
        
        
    }
   

});