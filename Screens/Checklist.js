import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore';
const image= require("../fondo.jpg")
function Checklist() {
  // Estado para la lista de tareas
  const [tareas, setTarea] = useState([]);
  // Estado para el nuevo ítem del input
  const [nuevaTarea, setnuevaTarea] = useState('');

  // Función que se llama cuando se envía el formulario
  const handleSubmit = () => {
    if (nuevaTarea.trim() !== "") {
      setTarea([...tareas, { text: nuevaTarea, completed: false }]);
      setnuevaTarea('');  // Limpiar el input
      AddTarea();         // Llama a la función para agregar la tarea a Firestore
      getTareas();        // Llama a la función para obtener las tareas al iniciar
    }
  };

  // Función para marcar una tarea como completada
  const marcarTarea = (index) => {
    const TareaActualizada = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completed: !tarea.completed } : tarea
    );
    setTarea(TareaActualizada);
  };

  // Función para agregar una tarea a la colección "Tareas"
  const AddTarea = async () => {
    try {
      await addDoc(collection(db, 'Tareas'), {
        
        Descripcion: nuevaTarea,  // Guardar la descripción
        Estado: false             // Estado inicia como 'no completado'
        
      });
      console.log('Tarea agregada');
   
    } catch (error) {
      console.error('Error al agregar tarea: ', error);
    }
  };
  const borrarTarea = async (id) => {
    try {
      const tareaRef = doc(db, 'Tareas', id); // El id de la tarea a eliminar
      await deleteDoc(tareaRef); // Eliminar la tarea asignada
      console.log('Tarea eliminada');
      
      setTarea(prevTareas => prevTareas.filter(tarea => tarea.id !== id)); //La borra visualmente
    } catch (error) {
      console.error('Error al eliminar tarea: ', error);
    }
  };
  

  // Función para obtener las tareas de la colección "Tareas"
  const getTareas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Tareas'));
      const tareasList = querySnapshot.docs.map(doc => ({
        id: doc.id,  // Aquí estás obteniendo el id de Firestore
        Descripcion: doc.data().Descripcion,
        Estado: doc.data().Estado
      }));
      setTarea(tareasList); // Guarda las tareas en el estado
    } catch (error) {
      console.error('Error al obtener tareas: ', error);
    }
  };
  
  

  // useEffect para ejecutar al cargar la app
  useEffect(() => {
    getTareas();  // Obtiene las tareas al iniciar la app
  }, []);

  return (
    <ImageBackground source={image} style={styles.container}>
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
            item.Estado && styles.completedtarea
          ]}
        >
          {item.Descripcion}
        </Text>
      </TouchableOpacity>
      <Button title="Eliminar" style={styles.borrar} onPress={() => borrarTarea(item.id)} />
    </View>
  )}
/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
   alignItems: 'center'
  },
  tareaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cajaBlanca:{
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
  borrar: {
   Color: 'red'
  },
  tarea: {
    fontSize: 18,
    padding: 10,
  },
  completedTarea: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
});

export default Checklist;
