import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image,TextInput } from 'react-native';
const img = require ("../fondo.jpg")
export default function BoleteriaMain ({navigation}) {
    
    return (
        <ImageBackground source={img} style={styles.container}>
           <View style={styles.textos}>
                <Text style={styles.titulo}>Boleteria</Text>
                <Text style={styles.textito}>e ingresos</Text>
            </View>
            <View style={styles.botones}>
                <View style={styles.buscador}>
                    <View style={styles.border}>
                        <TextInput style={styles.inp}>Here</TextInput>
                        
                    </View>
                    <TouchableOpacity style={styles.icon}><Image source={require('../img/lupa.png')}></Image></TouchableOpacity>
                </View>
                <View style={styles.position}>
                    <TouchableOpacity style={styles.ventRes} onPress={() => navigation.navigate('ventas')}>
                        <Text>Ventas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ventRes} onPress={() => navigation.navigate('reserva')}>
                        <Text>Reservas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.blacklist}>
            <Text style={styles.textito}>blacklist</Text>
            <View style={styles.buscador}>
                    <View style={styles.border}>
                        <TextInput style={styles.inp}>Here</TextInput>
                        
                    </View>
                    <TouchableOpacity style={styles.icon}><Image source={require('../img/lupa.png')}></Image></TouchableOpacity>
                </View>
                <View style={styles.preview}>
                <View style={styles.box}>
                    <View style={styles.circle}></View>
                    <View style={styles.nombre}></View>
                    <View style={styles.circle}></View>
                </View>

                <View style={styles.box}>
                    <View style={styles.circle}></View>
                    <View style={styles.nombre}></View>
                    <View style={styles.circle}></View>
                </View>

                <View style={styles.box}>
                    <View style={styles.circle}></View>
                    <View style={styles.nombre}></View>
                    <View style={styles.circle}></View>
                </View>

                <View style={styles.box}>
                    <View style={styles.circle}></View>
                    <View style={styles.nombre}></View>
                    <View style={styles.circle}></View>
                </View>
                
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.botton} onPress={() => navigation.navigate('bols')}><Text style={styles.textito}>Ver Más</Text></TouchableOpacity>
                    <TouchableOpacity><Image style={styles.images} source={require('../img/add-button.png')}></Image></TouchableOpacity>
                </View>
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
    textos:{
        width:'100%',
        height:'10%',
        
        alignItems:'center'
    },
    titulo:{
        fontSize:30,
        color:'white'
    },
    textito:{
        textAlign:'center',
        color:'white'
    },
    botones:{
        width:'80%',
        height:'30%',
        backgroundColor:'rgba(255,255,255,0.7);',
        borderRadius:10,
        
    },
    blacklist:{
        width:'80%',
        height:'58%',
        backgroundColor:'rgba(255,255,255,0.7);',
        top:'1%',
        borderRadius:10
    },
    buscador:{
        width:'100%',
        height:40,
        
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    border:{
        width:'80%',
        height:'100%',
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        justifyContent:'flex-end',
        
    },
    inp:{
        fontSize:15,
        textAlignVertical:'bottom',
       
    },
    icon:{
        top:'2%'
    },
    ventRes:{
        width:'30%',
        height:110,
        borderRadius:10,
        backgroundColor:'#fff',
        top:'3%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    },
    position:{
        height:148,
        width:'100%',
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    box:{
        width:'100%',
        height:40,
        backgroundColor:'gray',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        
        
    },
    circle:{
        width:40,
        height:40,
        backgroundColor:'white',
        borderRadius:20
    },
    nombre:{
        width:'50%',
        height:'100%',
        backgroundColor:'white',
        borderRadius:10
    },
    preview:{
        width:'100%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    btn:{
        width:'100%',
        height:'12%',
       
         display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    botton:{
        width:'50%',
        height:'100%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#fff',
       
    },
});