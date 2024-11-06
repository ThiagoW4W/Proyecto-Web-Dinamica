import { Link } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet,View,ImageBackground,Text,Image,FlatList,} from 'react-native';
import { db } from '../firebase/config';
import {  getDocs,collection} from 'firebase/firestore';
const image= require("../fondo.jpg")


export default function Inicio() {


  const [tareas, setTarea] = useState([]);
  // Estado para el nuevo ítem del input
  
  const getTareas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'checklist'));
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
  
  useFocusEffect(
    useCallback(() => {
      getTareas();  // Llama a getTareas cada vez que la pantalla está activa
    }, [])
  );

    return (
      
      <ImageBackground source={image} style={styles.container}>
        <Link style={styles.check} to={{screen:'checklists'}}>
          
        <View style={styles.contenedorTareas} >
        <Text style={styles.textoChecklist}>Checklist</Text>
          
          
          <FlatList
              data={tareas}
              keyExtractor={(item) => item.id}
              style={[styles.flatList ]}
              renderItem={({ item }) => (
                <View style={styles.tareaContainer}>
                 
                    <Text style={styles.tareaText}>
                      {item.Descripcion}
                    </Text>
                    
                  
                </View>
              )}
          />
        
        </View>
        </Link>

        <Link style={styles.merc} to={{screen:'mercaderias'}}>
        <View style={styles.box}>
        <Image
          style={styles.icons}
          source={require("../img/coctel.png")}
          
        />
        <Text style={styles.texto}>Mercaderia</Text>
        </View>
        </Link>
        <Link style={styles.second} to={{screen:'Boleterias'}}>
        <View style={styles.box}>
        <Image
          style={styles.icons}
          source={require("../img/ticket.png")}
          
        />
        <Text style={styles.texto}>Boleteria</Text>
        </View>
        </Link>
        
        <Link style={styles.second} to={{screen:'zones'}}>
        <View style={styles.box}>
        <Image
          style={styles.icons}
          source={require("../img/map.png")}
          
        />
        <Text style={styles.texto}>Zonas del recinto</Text>
        </View>
        </Link>
        
        
        
      </ImageBackground>
    );
  
  }
  
  
  const styles = StyleSheet.create({
    container: {
     
      alignItems: 'center',
      width:'auto',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly'
      
    },
    check: {
      width:'70%',
      height:'30%',
      backgroundColor:'rgba(255,255,255,0.7);',
      borderRadius:10,
      
      position:'relative',
      paddingLeft:'3%',

      
    },
    texto:{
      fontSize:15,

    },
    merc: {
      width:'70%',
      height:'15%',
      backgroundColor:'rgba(255,255,255,0.7);',
      borderRadius:10,
      position:'relative',
      paddingLeft:'3%',    
      display:'flex',
      flexDirection:'column',                     
    },
    contenedorTareas:{
      padding:20
    },
    icons:{
      width:50,
      height:50,
      position:'relative',
      marginBottom: 10,
      marginTop:10,
    },
    box:{
      width:'100%',
      height:'100%',
     marginTop:'5%',
     
      
    },
    second: {
      width:'70%',
      height:'15%',
      backgroundColor:'rgba(255,255,255,0.7);',
      
      borderRadius:10,
      
      position:'relative',
      paddingLeft:'3%',
      display:'flex',
      flexDirection:'column',
     
     
      
     
    },
    tareaText: {
      fontWeight: 'bold'
      
    }
  });