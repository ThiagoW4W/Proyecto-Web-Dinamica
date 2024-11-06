import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { db } from '../firebase/config'; 
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Toast from 'react-native-toast-message';
const image = require("../fondo.jpg");

function Checklist({ navigation }) {
  const [tareas, setTarea] = useState([]);
  const [nuevaTarea, setnuevaTarea] = useState('');

  const handleSubmit = () => {
    if (nuevaTarea.trim() !== "") {
      AddTarea();
      setnuevaTarea('');
    }
  };

  const marcarTarea = (id, estadoActual) => {
    const TareaActualizada = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, Estado: !estadoActual } : tarea
    );
    setTarea(TareaActualizada);
  };

  const AddTarea = async () => {
    try {
      const docRef = await addDoc(collection(db, 'checklist'), {
        Descripcion: nuevaTarea,
        Estado: false
      });

      console.log('Tarea agregada');
      Toast.show({
        type: 'success',
        text1: 'Tarea agregada!',
        position: 'top',
        visibilityTime: 3000,
    });
      setTarea([...tareas, { id: docRef.id, Descripcion: nuevaTarea, Estado: false }]);
    } catch (error) {
      console.error('Error al agregar tarea: ', error);
    }
  };

  const borrarTarea = async (id) => {
    try { 
      const tareaRef = doc(db, 'checklist', id);
      await deleteDoc(tareaRef);
      console.log('Tarea eliminada');
      setTarea((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
      Toast.show({
        type: 'error',
        text1: 'Tarea eliminada!',
        position: 'top',
        visibilityTime: 3000,
    });
    } catch (error) {
      console.error('Error al eliminar tarea: ', error);
    }
  };

  const getTareas = async () => { 
    try {
      const querySnapshot = await getDocs(collection(db, 'checklist'));
      const tareasList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        Descripcion: doc.data().Descripcion,
        Estado: doc.data().Estado
      }));
      setTarea(tareasList);
      console.log('Toma');
      Toast.show({
        type: 'success',
        text1: 'Tareas Cargadas!',
        position: 'top',
        visibilityTime: 3000,
    });
      
    } catch (error) {
      console.error('Error al obtener tareas: ', error);
    }
  }; 

  useEffect( () => {
 
      getTareas();  // Llama a getTareas cada vez que la pantalla está activa
    }, [])


  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.flechita}>
        <TouchableOpacity onPress={() => navigation.navigate('inicia')}>
          <Image source={require("../img/atras.png")} style={styles.flecha} />
        </TouchableOpacity>
      </View>
      <View style={styles.cajaBlanca}>
        <Text style={styles.titulo}>Checklist</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={nuevaTarea}
            onChangeText={setnuevaTarea}
            placeholder="Escribe una nueva tarea"
          />
          <Button title="Añadir" onPress={handleSubmit} />
        </View>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tareaContainer}>
              <TouchableOpacity onPress={() => marcarTarea(item.id, item.Estado)}>
                <Text
                  style={[
                    styles.tarea,
                    item.Estado && styles.completedTarea
                  ]}
                >
                  {item.Descripcion}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => borrarTarea(item.id)} style={styles.borrarBoton}>
                <Text style={styles.borrarTexto}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tareaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cajaBlanca: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: "#fff",
    opacity: 0.75,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 40,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  borrarBoton: {
    borderColor: '#ccc',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
  },
  borrarTexto: {
    color: 'white',
  },
  tarea: {
    fontSize: 18,
    padding: 10,
  },
  completedTarea: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  flecha: {
    width: 30,
    height: 30,
  },
  flechita: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});

export default Checklist;
