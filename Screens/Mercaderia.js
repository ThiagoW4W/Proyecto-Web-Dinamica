import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity, ScrollView, RefreshControl, Modal, TextInput, Button,Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { db } from '../firebase/config';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const image = require('./../fondo.jpg');

export default function Mercaderia({ navigation }) {
    const [Productos, setProductos] = useState([]);
    const [cargando, setcargando] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Estado para controlar el modal y los valores del producto
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Producto, setProducto] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');

    // Función para obtener datos de Firestore
    const TraerDatos = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'productos'));
            const dataList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                nombre: doc.data().nombre ? String(doc.data().nombre) : 'Sin nombre',
                precio: doc.data().precio ? String(doc.data().precio) : 'Sin precio',
                stock: doc.data().stock ? String(doc.data().stock) : 'Sin stock',
            }));
            setProductos(dataList);
            Toast.show({
                type: 'success',
                text1: 'Datos cargados!',
                position: 'top',
                visibilityTime: 3000,
            });
        } catch (error) {
            console.error('Error al obtener datos: ', error);
        } finally {
            setcargando(false);
        }
    };
 
    const openModal = (product) => {
        setProducto(product);
        setNombre(product.nombre ?? '');
        setPrecio(product.precio ?? '');
        setStock(product.stock ?? '');
        setIsModalVisible(true);
    };

    // Función para guardar cambios en Firebase
    const CambiarDatos = async () => {
        if (Producto) {
            
            try {
                if ( nombre!='' && precio!='' && stock!=''){
                const productRef = doc(db, 'productos', Producto.id);
                await updateDoc(productRef, { nombre, precio, stock });
                Toast.show({
                    type: 'success',
                    text1: 'Producto actualizado!',
                    position: 'top',
                    visibilityTime: 3000,
                });
                TraerDatos(); 
            }else{
                Alert.alert("Error", "Por favor, completa todos los campos.");
            }
            } catch (error) {
                console.error("Error al actualizar producto:", error);
            }
        }
        setIsModalVisible(false);
    };
    const deleteProduct = async () => {
        if (!Producto) return; 
        try {
            await deleteDoc(doc(db, 'productos', Producto.id));
            Toast.show({
                type: 'success',
                text1: 'Producto eliminado!',
                position: 'top',
                visibilityTime: 3000,
            });
            setIsModalVisible(false); 
            setProducto(null); 
            TraerDatos(); 
        } catch (error) {
            console.error('Error al eliminar el producto: ', error);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await TraerDatos();
        setRefreshing(false);
    };

    useEffect(() => {
        TraerDatos();
    }, []);

    return (
        <ImageBackground source={image} style={styles.mercaderiaContainer}>
            {cargando ? (
                <Text style={styles.loadingText}>Cargando productos...</Text>
            ) : (
                <>
                    <Text style={styles.tituloTexto}>Mercadería</Text>
                    <Text style={styles.subtituloTexto}>Productos</Text>
                    <View style={styles.box}>
                        <View style={styles.navSup}>
                            <Text>Nombre</Text>
                            <Text>Precio</Text>
                            <Text>Stock</Text>
                        </View>
                        <ScrollView
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    colors={['blue']}
                                />
                            }
                            contentContainerStyle={styles.ContenedorLockers}
                        >
                            <View style={styles.ProductosContainer}>
                                {Productos.length > 0 ? (
                                    Productos.map((producto) => (
                                        <View style={styles.Productos} key={producto.id}>
                                            <TouchableOpacity style={styles.productos} 
                                            onPress={() => openModal(producto)}>
                                                <View style={styles.object} >
                                                    <Text>{producto.nombre ?? 'Sin nombre'}</Text>
                                                </View>
                                                <View style={styles.object}>
                                                    <Text>{producto.precio ?? 'Sin precio'}</Text>
                                                </View>
                                                <View style={styles.object}>
                                                    <Text>{producto.stock ?? 'Sin stock'}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.loadingText}>No hay productos disponibles</Text>
                                )}
                            </View>
                        </ScrollView>

                        <View style={styles.position}>
                            <View style={styles.buttons}>
                                <TouchableOpacity>
                                    <Image source={require("../img/option.png")} style={styles.imagen} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('new')}>
                                    <Image source={require("../img/add.png")} style={styles.imagen} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </>
            )}
            <Toast ref={(ref) => Toast.setRef(ref)} />

            {/* Modal para editar producto */}
            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContent}>
                    <Text style={styles.tituloTextoModal}>Modificar Producto</Text>
                    <TextInput
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={text => setNombre(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Precio"
                        value={precio}
                        onChangeText={text => setPrecio(text)}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Stock"
                        value={stock}
                        onChangeText={text => setStock(text)}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <View style={styles.botonesModal}>
                    <TouchableOpacity onPress={CambiarDatos} style={styles.botonModal}>
                        <Text style={styles.buttonTextModal}>Guardar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsModalVisible(false)} style={[styles.botonModal]}>
                        <Text style={styles.buttonTextModal}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteProduct} style={[styles.botonModal]}>
                    <   Text style={styles.buttonTextModal}>Eliminar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mercaderiaContainer: {
        display: 'flex',
        alignProductos: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: '100%',
    },
    modalContent: {
        flex:1,
        
        backgroundColor:'white',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        
        
        borderRadius:20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        backgroundColor: 'white',
    },
    botonesModal:{
        
        display:'flex',
        flexDirection: 'row',
        gap: 20,
    },
    botonModal:{
        width: 120,
        textAlign: 'center',
        borderWidth: 1,
        padding:10,
        borderRadius: 20,
    },
    buttonTextModal:{
        fontSize:20,
        textAlign: 'center',
    },
    box: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        opacity: 0.7,
        top: 20,
        borderRadius: 10,
    },
    tituloTexto: {
        color: 'white',
        fontSize: 30,
    },
    tituloTextoModal:{
        color: 'black',
        fontSize: 30,
    },
    subtituloTexto: {
        color: 'white',
        top: 10,
    },
    navSup: {
        width: '100%',
        height: '10%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomWidth: 3,
        borderColor: 'black',
        borderStyle: 'solid',
        alignProductos: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ProductosContainer: {
        width: '100%',
        padding: 0,
        margin: 0,
        flexDirection: 'column',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: '80%',
    },
    Productos: {
        width: '100%',
        padding: 0,
        margin: 0,
    },
    productos: {
        
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    circle: {
        width: '25%',
        height: '75%',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    object: {
        width: '30%',
        height: '75%',
        backgroundColor: 'white',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignProductos: 'center',
    },
    buttons: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignProductos: 'center',
        alignItems: 'center'
    },
    position: {
        width: '100%',
        height: '10%',
        position: 'relative',
        display: 'flex',
    },
    navText: {
        color: 'black',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    
});
