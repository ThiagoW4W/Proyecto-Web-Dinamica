import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image,TextInput,ScrollView } from 'react-native';
import { db } from '../firebase/config';
import { addDoc, collection,getDocs} from 'firebase/firestore';
import Toast from 'react-native-toast-message';
import { useEffect, useState } from 'react';
const img = require ("../fondo.jpg")
const MAX_DOCS = 100;

export default function NuevaReserva ({navigation}) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [DNI, setDNI] = useState('');
    const [cantidadPers, setCantidadPers] = useState('0');
    const [GLOBAL,setGlobal] = useState('')


const verCantidadReservas = async () =>{
    const querySnapshot = await getDocs(collection(db, 'Reservas'));
    const contadorReserva = querySnapshot.size;
    setGlobal(Number(contadorReserva) + Number(cantidadPers)) 
}
useEffect (() => {
    verCantidadReservas()
    console.log("hola tengo",GLOBAL)
}, []);

    
    const addProducto = async () => {
        if (nombre !="" && apellido !="" && DNI !=""&& cantidadPers !="") {
            try {
                const querySnapshot = await getDocs(collection(db, 'Reservas'));
                const contadorReserva = querySnapshot.size;
                if (contadorReserva < MAX_DOCS) {
                    await addDoc(collection(db, 'Reservas'),{
                        nombre,
                        apellido,
                        DNI,
                        cantidadPers,
                    });
                    setGlobal(Number(contadorReserva) + Number(cantidadPers)) 
                    
                    
                    
                    
                    console.log('Producto agregado');
                    // Limpiar los campos después de agregar
                    setNombre('');
                    setApellido('');
                    setDNI('');
                    setCantidadPers('');
                    Toast.show({
                        type: 'success',
                        text1: 'Venta subida!',
                        position: 'top',
                        visibilityTime: 3000,
                    });
                }else{
                    Toast.show({
                        type: 'error',
                        text1: 'No tienes más espacio en los roperos',
                        position: 'top',
                        visibilityTime: 3000,
                    });
                }
                
            } catch (error) {
                
                console.error('Error al agregar reserva: ', error);
            }
        }
        else {
            
            Toast.show({
                type: 'error',
                text1: 'Completa los campos!',
                position: 'top',
                visibilityTime: 3000,
            });
            
        }
        
    };
    return (
        <ImageBackground source={img} style={styles.container}>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <Text style={styles.titulo}>Venta Nueva</Text>
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('reserva')}><Image source={require('../img/left.png')}></Image></TouchableOpacity>
            <Text style={styles.texto}>Entradas</Text>
        </View>
        <View style={styles.vendidas}>
            <Text style={styles.texti}>Vendidas</Text>
            <View style={styles.num}>
                <Text> {GLOBAL}/100</Text> 
            </View>
        </View>
        <View style={styles.venderNav}>
        <Text style={styles.texti}>Vender</Text>
        </View>
        <View style={styles.vender}>
            <View style={styles.inputs}>
                <TextInput 
                    style={styles.input }
                    placeholder='Nombre'
                    value={nombre}
                    onChangeText={setNombre}
                ></TextInput>
                <TextInput 
                    style={styles.input } 
                    placeholder='Apellido'
                    value={apellido}
                    onChangeText={setApellido}
                ></TextInput>
                <TextInput
                    style={styles.input} 
                    placeholder='Dni'
                    value={DNI}
                    onChangeText={setDNI}
                ></TextInput>
                <TextInput
                    style={styles.input} 
                    placeholder='Cantidad de personas'
                    value={cantidadPers}
                    onChangeText={setCantidadPers}
                ></TextInput>
            </View>
                     
            <TouchableOpacity style={styles.boton} onPress={addProducto} >
                <Text style={styles.font}>Vender</Text>
            </TouchableOpacity>
           
                
        </View >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        },
        titulo:{
            fontSize:30,
            color:'#fff',
            width:'100%',
            height:'10%',
            textAlign:'center',
            textAlignVertical:'center',
            marginBottom:'2%'
        },
        menu:{
            
            width:'80%',
            height:'8%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            alignItems:'center',
            display:'flex',
            flexDirection:'row',
           
            
        },
        texto:{
            color:'#fff',
            left:'180%'
        },
        vendidas:{
            width:'80%',
            height:'13%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            top:'0.5%',
            alignItems:'center'
        },
        texti:{
            textAlign:'center',
           
            height:30,
            textAlignVertical:'bottom',
            color:'#fff',
           
        },
        num:{
            top:'9%',
            width:'30%',
            height:'45%',
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        venderNav:{
            width:310,
            height:'8%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            alignItems:'center',
            top:'3%'
            
        },
        vender:{
            width:310,
            height:400,
            backgroundColor:'rgba(255,255,255,0.7);',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            top:'3.5%',
            alignItems:'center'
        },
        inputs:{
            width:'98%',
            height:100,
            top:'10%'
        },
        input:{
            borderBottomColor:'#000',
            borderBottomWidth:1,
            textAlignVertical:'bottom',
            borderStyle:'dashed',
            marginBottom:'2%'
        },
        boton:{
            width:150,
            height:40,
            top:'40%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            borderColor:'#fff',
            borderWidth:1
        },
        font:{
            color:'#fff',
        }
      
        
       
});