import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image,TextInput,ScrollView,RefreshControl,Modal } from 'react-native';
import { db } from '../firebase/config';
import Toast from 'react-native-toast-message';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
const img = require ("../fondo.jpg")


export default function Reserva ({navigation}) {
    const [Ventas, setVentas] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); 
    const [ventaAEliminar, setventaAEliminar] = useState(null); 
    const traerVentas = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Reservas'));
            const dataList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                nombre: doc.data().nombre ? String(doc.data().nombre) : 'Sin nombre',
                apellido: doc.data().apellido ? String(doc.data().apellido) : 'Sin apellido',
                DNI: doc.data().DNI ? String(doc.data().DNI) : 'DNI',
                cantidadPers: doc.data().cantidadPers ? String(doc.data().cantidadPers) : 'cantidadPers',
            }));
            Toast.show({
              type: 'success',
              text1: 'Ventas Actualizadas!',
              position: 'top',
              visibilityTime: 3000,
            });
            setVentas(dataList); 
            console.log('Mostrando datos de la base de datos');
        } catch (error) {
            console.error('Error al obtener datos: ', error);
            Toast.show({
                type: 'error',
                text1: 'Error al traer ventas!',
                position: 'top',
                visibilityTime: 3000,
            });
        } 
    }
        const onRefresh = async () => {
            setRefreshing(true); 
            await traerVentas();  
            setRefreshing(false); 
          }; 
          const handleDeleteClick = (venta) => {
            setventaAEliminar(venta ); // Establece el casillero que se va a eliminar
            setIsModalVisible(true); 
        };
        const borrarVentas = async (id) => {
            try { 
              console.log(id);
              const  sRef = doc(db, 'Reservas', id);
              await deleteDoc( sRef);
              console.log('Ventas eliminada');
              setVentas((prevVentass) => prevVentass.filter((Ventas) => Ventas.id !== id));
              Toast.show({
                type: 'error',
                text1: 'Ventas eliminada!',
                position: 'top',
                visibilityTime: 3000,
            });
            } catch (error) {
              console.error('Error al eliminar Ventas: ', error);
            }
          };
        useEffect(() => {
            traerVentas();
          }, []);
    return (
        <ImageBackground source={img} style={styles.container}>
             <View style={styles.flechita}>
                        <TouchableOpacity onPress={() => navigation.navigate('Boleterias')}><Image source={require("../img/atras.png")} style = {styles.flecha}></Image></TouchableOpacity>
                </View>
        <Text style={styles.titulo}>Ventas</Text>
        <View style={styles.box}>
            <Text style={styles.subtitulo}>Historial de Venta</Text>
            <View style={styles.buscador}>
                    <View style={styles.border}>
                        <TextInput 
                        style={styles.inp}
                        placeholder= "Ingrese DNI..."
                      


                        ></TextInput>
                        
                    </View>
                    <TouchableOpacity style={styles.icon}><Image source={require('../img/lupa.png')}></Image></TouchableOpacity>
                </View>
            <ScrollView style={styles.scrollableView}
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing} 
                    onRefresh={onRefresh} // Activa el pull-to-refresh
                    colors={['blue' ]} // Colores de la animación de carga
                    />
                }
              contentContainerStyle={styles.Contenedor }
             >
                {Ventas.length > 0 ? (
                Ventas.map((venta) => ( 
                    <TouchableOpacity key={venta.id} onPress={() => handleDeleteClick(venta)} >
                        <View style={styles.venta}>
                            <View style={styles.datos}>
                                <Text>{venta.nombre ?? 'sin nombre'}</Text>
                            </View>
                            <View style={styles.datos}>
                                <Text>{venta.apellido ?? 'sin nombre'}</Text>
                            </View>
                            <View style={styles.DNI}>
                                <Text>{venta.DNI ?? 'sin nombre'}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
             
                ))
            ) : (
                <Text style={styles.textoDeCarga}>No hay ventas...</Text>
            )}
            
            
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true} 
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)} 
            > 
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿Desea eliminar el casillero?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={() => {
                                    if (ventaAEliminar) {
                                        borrarVentas(ventaAEliminar.id);
                                        setIsModalVisible(false)
                                    }
                                }} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Sí</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            
            
            
            <TouchableOpacity onPress={() => navigation.navigate('nuevaRes')} style={styles.icono}>
            <Image source={require('../img/add-button.png')}></Image>
            </TouchableOpacity>
         </View>
        
        
        
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
            top:'2%'
        },
        box:{
            backgroundColor:'rgba(255,255,255,0.7);',
            width:'80%',
            height:'80%',
            top:'5%',
            borderRadius:10,
            
        },
        buscador:{
        width:'100%',
        height:40,
        
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    border:{
        width:'80%',
        height:'100%',
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        justifyContent:'flex-end',
        
    },
    inp:{
        fontSize:15,
        textAlignVertical:'bottom',
       
    },
    icon:{
        top:'2%'
    },  
        subtitulo:{
            color:'#fff',
            fontSize:20,
            textAlign:'center',
            height:'10%',
            textAlignVertical:'center',
            borderBottomWidth:1,
            borderBottomColor:'#fff'
        },
        venta:{
            
            width:'100%',
            height:40,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            top:'5%',
            marginBottom:'5%'
        },
        datos:{
            backgroundColor:'white',
            width:'25%',
            height:40,
            borderRadius:10
        },
        DNI:{
            height:40,
            width:'40%',
            backgroundColor:'white',
            borderRadius:10
            
        },
        scrollableView:{
            objectFit:'contain',
            width:'100%',
            overflow:'',
            borderBottomWidth:1,
            borderBottomColor:'#fff'
           
          },
          icono:{
            alignItems:'flex-end',
            marginBottom:'2%',
            marginRight:'2%',
            top:'0.5%'
          },
          flecha: {
            width: 30,  
            height: 30,
          },
          flechita: {
            position: 'absolute',
            top: 20,
            left: 40,
          }, modalOverlay: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        textoDeCarga:{
            textAlign:'center',
            marginTop: 200,
            fontSize:18,
            color:'grey'
        },
        modalContent: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '80%',
            alignItems: 'center',
        },
        modalText: {
            fontSize: 18,
            marginBottom: 20,
        },
        modalButtons: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
        },
        modalButton: {
            backgroundColor: 'gray',
            padding: 10,
            borderRadius: 10,
            width: '40%',
            alignItems: 'center',
        },
        modalButtonText: {
            color: 'white',
            fontSize: 16,
        },
});