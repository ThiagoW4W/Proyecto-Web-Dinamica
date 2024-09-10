import { Link } from '@react-navigation/native';
import { StyleSheet,View,Button,ImageBackground,Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const image= require("../fondo.jpg")
import TabScreen from '../navigation/Tab';


export default function Inicio() {
   
    return (
      
      <ImageBackground source={image} style={styles.container}>
        
        <Link style={styles.check} to={{screen:'checklists'}}>
        
        <Text style={styles.texto}>Checklist</Text>
       
        </Link>
        <Link style={styles.merc} to={{screen:'checklists'}}>
        <View style={styles.box}>
        <Image
          style={styles.icons}
          source={require("../img/coctel.png")}
          
        />
        <Text style={styles.texto}>Mercaderia</Text>
        </View>
        </Link>
        <Link style={styles.second} to={{screen:'checklists'}}>
        <View style={styles.box}>
        <Image
          style={styles.icons}
          source={require("../img/ticket.png")}
          
        />
        <Text style={styles.texto}>Boleteria</Text>
        </View>
        </Link>
        
        <Link style={styles.second} to={{screen:'checklists'}}>
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
      backgroundColor:'#fff',
      opacity: 0.7,
      borderRadius:10,
      
      position:'relative',
      paddingLeft:'3%',

      
    },
    texto:{
      fontSize:12,
      position:'relative',
      
      
      
      
    
      
    },
    merc: {
      width:'70%',
      height:'15%',
      backgroundColor:'#fff',
      opacity: 0.7,
      borderRadius:10,
     
      position:'relative',
      paddingLeft:'3%',
    
      display:'flex',
      flexDirection:'column',
     
     
      
     
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
      backgroundColor:'#fff',
      opacity: 0.7,
      borderRadius:10,
      
      position:'relative',
      paddingLeft:'3%',
      display:'flex',
      flexDirection:'column',
     
     
      
     
    },
  });