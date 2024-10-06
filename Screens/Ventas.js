import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image,TextInput,ScrollView } from 'react-native';
const img = require ("../fondo.jpg")
export default function Ventas ({navigation}) {
    
    return (
        <ImageBackground source={img} style={styles.container}>
        <Text style={styles.titulo}>Ventas</Text>
        <View style={styles.box}>
            <Text style={styles.subtitulo}>Historial de Venta</Text>
            <ScrollView style={styles.scrollableView}>
            <View style={styles.persona}>
                <View style={styles.datos}>
                </View>
                <View style={styles.datos}>
                </View>
                <View style={styles.dni}>
                </View>
            </View>

            <View style={styles.persona}>
                <View style={styles.datos}>
                </View>
                <View style={styles.datos}>
                </View>
                <View style={styles.dni}>
                </View>
            </View>
            <View style={styles.persona}>
                <View style={styles.datos}>
                </View>
                <View style={styles.datos}>
                </View>
                <View style={styles.dni}>
                </View>
            </View>
            <View style={styles.persona}>
                <View style={styles.datos}>
                </View>
                <View style={styles.datos}>
                </View>
                <View style={styles.dni}>
                </View>
            </View>
            <View style={styles.persona}>
                <View style={styles.datos}>
                </View>
                <View style={styles.datos}>
                </View>
                <View style={styles.dni}>
                </View>
            </View>
            
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('nueva')} style={styles.icono}>
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
        subtitulo:{
            color:'#fff',
            fontSize:20,
            textAlign:'center',
            height:'10%',
            textAlignVertical:'center',
            borderBottomWidth:1,
            borderBottomColor:'#fff'
        },
        persona:{
            
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
        dni:{
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
          }
});