import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { db } from '../firebase/config';
import Toast from 'react-native-toast-message';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';

const img = require ("../fondo.jpg");

function Ropero({ navigation }) {
    // Estados iniciales para los casilleros
    const [lockers, setlockers] = useState([]);
    const [refreshing, setRefreshing] = useState(false); // Estado para la actualización
    const [isModalVisible, setIsModalVisible] = useState(false); 
    const [lockerToDelete, setLockerToDelete] = useState(null); 
    const TraerDatos = async () => {
      try {
          const querySnapshot = await getDocs(collection(db, 'roperos'));
          const dataList = querySnapshot.docs.map(doc => ({
              id: doc.id,
              nombre: doc.data().nombre ? String(doc.data().nombre) : 'Sin nombre',
              apellido: doc.data().apellido ? String(doc.data().apellido) : 'Sin apellido',
              dni: doc.data().dni ? String(doc.data().dni) : 'dni',
          }));
          Toast.show({
            type: 'success',
            text1: 'Datos Actualizados!',
            position: 'top',
            visibilityTime: 3000,
        });
          setlockers(dataList); 
          console.log('Mostrando datos de la base de datos');
      } catch (error) {
          console.error('Error al obtener datos: ', error);
      } 
  };

  const borrarlockers = async (id) => {
    try { 
      console.log(id);
      const lockersRef = doc(db, 'roperos', id);
      await deleteDoc(lockersRef);
      console.log('Locker eliminada');
      setlockers((prevLockers) => prevLockers.filter((locker) => locker.id !== id));
      Toast.show({
        type: 'error',
        text1: 'Locker eliminada!',
        position: 'top',
        visibilityTime: 3000,
    });
    } catch (error) {
      console.error('Error al eliminar lockers: ', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true); 
    await TraerDatos();  
    setRefreshing(false); 
  };
  const handleDeleteClick = (locker) => {
    setLockerToDelete(locker); // Establece el casillero que se va a eliminar
    setIsModalVisible(true); 
};

  useEffect(() => {
    TraerDatos();
  }, []);

    return (
        <ImageBackground source={img} style={styles.container}>
          
          <Text style={styles.titulo}>Ropero</Text>
          <View style={styles.cajaderoperos}> 
          <ScrollView 
              
              refreshControl={
                <RefreshControl
                  refreshing={refreshing} 
                  onRefresh={onRefresh} // Activa el pull-to-refresh
                  colors={['blue' ]} // Colores de la animación de carga
                />
              }
              contentContainerStyle={styles.ContenedorLockers}
             
            >
              {lockers.length > 0 ? (
                lockers.map((locker) => (
                  <TouchableOpacity style={styles.lockers} key={locker.id} onPress={() => handleDeleteClick(locker)}>
                    <View>
                      <Text>{locker.nombre ?? 'Sin nombre'}</Text>
                    </View>
                    <View>
                      <Text>{locker.apellido ?? 'Sin apellido'}</Text>
                    </View>
                    <View>
                      <Text>{locker.dni ?? 'Sin dni'}</Text>
                    </View>  
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.loadingText}>No hay lockers disponibles</Text>
              )}
            </ScrollView>
            <View style={styles.botones}>            
              <TouchableOpacity  onPress={() => navigation.navigate('NuevoRopero')}>
                <Text style={styles.mas}> + </Text>
              </TouchableOpacity>
            </View>
            
          </View>
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
                                    if (lockerToDelete) {
                                        borrarlockers(lockerToDelete.id);
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
          <Toast ref={(ref) => Toast.setRef(ref)} />
            
        </ImageBackground>
    );
}

export default Ropero;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      
    },
    cajaderoperos: {
      display: 'flex',
      flexWrap: 'wrap', 
      flexDirection: 'row',
      width:'80%',
      height:'80%',
    
      backgroundColor:'#FFF',
      borderRadius:12,
      
      opacity: 0.65,
      
    },
    titulo: {
      textAlign: 'center',
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 5,
      color:'#fff',
      width: '100%',
      height: 50,
    },
    ContenedorLockers:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: 20,
    },


    lockers: {
      height: 100,
      width: 100, 
      margin: 10,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    botones: { 
      display: 'flex',
      position: 'absolute',
      flexDirection: 'row',
      width: '90%',
      justifyContent:'space-evenly',
      alignItems: 'center',
      top: '90%',
    },
    containerButton: {
      borderRadius: 12, 
      borderColor: 'white',
      borderWidth: 2,
      paddingVertical: 10,
      width: '65%', 
      marginBottom: 15,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    mas: {
      textAlign: 'center',
      borderRadius: 12, 
      borderColor: 'white',
      borderWidth: 2,
      paddingVertical: 10,
      width: '300%',
      marginBottom: 15,
    },
    loadingText: {
      fontSize: 18,
      color: '#666',
      marginTop: 20,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
