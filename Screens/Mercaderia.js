import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const image = require('./../fondo.jpg');

export default function Mercaderia({ navigation }) {
    const [Productos, setProductos] = useState([]); // Estado para almacenar los datos de la BD
    const [cargando, setcargando] = useState(true); // Estado de carga

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
            setProductos(dataList); // Guarda los datos en el estado
            console.log('Mostrando datos de la base de datos ');

            // Muestra el mensaje de éxito
            Toast.show({
                type: 'success',
                text1: 'Datos cargados!',
                position: 'top',
                visibilityTime: 3000,
            });
        } catch (error) {
            console.error('Error al obtener datos: ', error);
        } finally {
            setcargando(false); // Desactiva el estado de carga
        }
    };

    // useEffect para cargar los datos al inicio
    useEffect(() => {
        TraerDatos();
    }, []);

    return (
        <ImageBackground source={image} style={styles.mercaderiaContainer}>
            {cargando ? (
                <Text style={styles.loadingText}>Cargando productos...</Text> // Mensaje mientras se cargan los datos
            ) : (
                <>
                    <Text style={styles.tituloTexto}>Mercaderia</Text>
                    <Text style={styles.subtituloTexto}>Productos</Text>

                    <View style={styles.box}>
                        <View style={styles.navSup}>
                            <TouchableOpacity onPress={() => navigation.navigate('inicia')}>
                                <Image source={require("../img/left.png")} style={styles.imagen} />
                            </TouchableOpacity>

                        </View>
                        <ScrollView>
                            <View style={styles.ProductosContainer}>
                                {Productos.length > 0 ? (
                                    Productos.map((productos) => (
                                        <View style={styles.Productos} key={productos.id}>
                                            <View style={styles.productos}>
                                            <View style={styles.object}>
                                                    <Text>{productos.nombre ?? 'Sin nombre'}</Text>
                                                </View>
                                                <View style={styles.object}>
                                                    <Text>{productos.precio ?? 'Sin nombre'}</Text>
                                                </View>
                                                <View style={styles.object}>
                                                    <Text>{productos.stock ?? 'Sin precio'}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.loadingText}>No hay productos disponibles</Text>
                                )}
                            </View>
                        </ScrollView>

                        <View style={styles.position}>
                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={() => navigation.navigate('checklists')}>
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
