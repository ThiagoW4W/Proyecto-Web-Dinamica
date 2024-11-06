import { StyleSheet,View,ImageBackground,Text,Image,TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';
import * as React from 'react';
import Toast from 'react-native-toast-message';
import { Button, Checkbox } from 'react-native-paper';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore';
const image= require("./../fondo.jpg")

export default function AñadirProd({navigation}) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');

    const addProducto = async () => {
        try {
            await addDoc(collection(db, 'productos'), {
                nombre,
                precio,
                stock,
                categoria,
            });
            console.log('Producto agregado');
            // Limpiar los campos después de agregar
            setNombre('');
            setPrecio('');
            setStock('');
            setCategoria('');
            Toast.show({
                type: 'success',
                text1: 'Datos Subidos!',
                position: 'top',
                visibilityTime: 3000,
            });
        } catch (error) {
            console.error('Error al agregar el producto: ', error);
        }
    };


    const toggleCheckbox = (option) => { //Esto es para que el valor de los checklist se actualice segun la opcción seleccionada
        setCategoria(option);
        console.log(`Opción seleccionada: ${option}`);
    };
        

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
                        
                            <Text >{nombre}</Text>
                        </View>
                        <View style={styles.precio}> 
                            <Text>
                                $
                                {precio}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inp}>
                    <Text>Nombre del producto</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <Text>Precio del producto</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Precio"
                        value={precio}
                        onChangeText={setPrecio}
                    />
                    <View style={styles.caja}>
                        <Text>Stock</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="stock"
                        value={stock}
                        onChangeText={setStock}
                    />
                    </View>
                <View style={styles.filtro}>
                <Text>Con alcohol</Text>
            <Checkbox
                status={categoria === 'Con alcohol' ? 'checked' : 'unchecked'}
                onPress={() => toggleCheckbox('Con alcohol')}
            />
            
            <Text>Sin alcohol</Text>
            <Checkbox
                status={categoria === 'Sin alcohol' ? 'checked' : 'unchecked'}
                onPress={() => toggleCheckbox('Sin alcohol')}
            />
                </View>
                   
                    <View style={styles.positionWidth}>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.boton} onPress={addProducto}>Enviar</Text>
                    </TouchableOpacity>
                    </View>
                    
                   
                    
                    
                </View>
            </View>
                
            <Toast ref={(ref) => Toast.setRef(ref)} />
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