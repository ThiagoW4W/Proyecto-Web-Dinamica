import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

function Checklist() {
  // Estado para la lista de tareas
  const [tareas, setTarea] = useState([]);
  // Estado para el nuevo ítem del input
  const [nuevaTarea, setnuevaTarea] = useState('');

  // Función que se llama cuando se envía el formulario
  const handleSubmit = () => {
    if (nuevaTarea.trim() !== "") {
      setTarea([...tareas, { text: nuevaTarea, completed: false }]);
      setnuevaTarea('');
    }
  };

  const form = async (event) => {
    event.preventDefault();
    // Guardar los valores en Firebase
    try {
    const docRef = await addDoc(collection(db, 'tareas'), tareas);
    console.log("Subiendo curso con el ID: ", docRef.id);
    } catch (e) {
    console.error("Error al añadir curso: ", e);
    }
  console.log(values);  // Esto sigue mostrando los valores en la consola, por si lo necesitas para depuración
};
  // Función para marcar una tarea como completada
  const marcarTarea = (index) => {
    const TareaActualizada = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completed: !tarea.completed } : tarea
    );
    setTarea(TareaActualizada);
  };

  return (
    <View style={styles.container}>
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => marcarTarea(index)}>
            <Text
              style={[
                styles.tarea,
                item.completed && styles.completedtarea
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  tarea: {
    fontSize: 18,
    padding: 10,
  },
  completedtarea: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
});

export default Checklist;