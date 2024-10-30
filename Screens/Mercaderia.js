import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const image = require('./../fondo.jpg');

export default function Mercaderia({ navigation }) {
    const [Productos, setProductos] = useState([]); // Estado para almacenar los datos de la BD
    const [cargando, setcargando] = useState(true); // Estado de carga

    // Función para obtener datos de Firestore
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'productos'));
            const dataList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                nombre: doc.data().nombre ? String(doc.data().nombre) : 'Sin nombre',
                precio: doc.data().precio ? String(doc.data().precio) : 'Sin precio',
            }));
            setProductos(dataList); // Guarda los datos en el estado
            console.log('Mostrando datos de la base de datos ');
            
        } catch (error) {
            console.error('Error al obtener datos: ', error);
        } finally {
            setcargando(false); // Desactiva el estado de carga
        }
    };

    // useEffect para cargar los datos al inicio
    useEffect(() => {
        fetchData();
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
                            <TouchableOpacity onPress={() => navigation.navigate('mercaderias')}>
                                <Text style={styles.navText}>Lista</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('stocks')}>
                                <Text style={styles.navText}>Stock</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ProductosContainer}>
                            {Productos.length > 0 ? (
                                Productos.map((productos) => (
                                    <View style={styles.Productos} key={productos.id}>
                                        <View style={styles.productos}>
                                            <View style={styles.circle}></View>
                                            <View style={styles.object}>
                                                <Text>{productos.nombre ?? 'Sin nombre'}</Text>
                                            </View>
                                            <View style={styles.object}>
                                                <Text>{productos.precio ?? 'Sin precio'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.loadingText}>No hay productos disponibles</Text>
                            )}
                        </View>

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
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mercaderiaContainer: {
        display:'flex',
        alignProductos: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: '100%',
    },
    box: {
        
        width: '70%',
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
    },
    ProductosContainer: {
        width: '100%',
        padding: 0,
        margin: 0,
        flexDirection: 'column', // Para que se alineen verticalmente
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    Productos: {
        width: '100%',
        padding: 0,
        margin: 0,
    },
    productos: {
        backgroundColor: 'black',
        width: '100%',
        height: 50, // Ajusta el tamaño según necesites
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    circle: {
        width: '13%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    object: {
        width: '35%',
        height: '75%',
        backgroundColor: 'white',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignProductos: 'center',
    },
    buttons: {
        width: '35%',
        height: '10%',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignProductos: 'center',
    },
    position: {
        width: '100%',
        height: '1200%',
        position: 'relative',
        display: 'flex',
        marginLeft: '65%',
    },
    navText: {
        color: 'black',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
});
