import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image,TextInput,ScrollView } from 'react-native';
const img = require ("../fondo.jpg")
export default function NuevaVenta ({navigation}) {
    
    return (
        <ImageBackground source={img} style={styles.container}>
        <Text style={styles.titulo}>Venta Nueva</Text>
        <View style={styles.menu}>
            <Image source={require('../img/left.png')}></Image>
            <Text style={styles.texto}>Entradas</Text>
        </View>
        <View style={styles.vendidas}>
            <Text style={styles.texti}>Vendidas</Text>
            <View style={styles.num}>
                <Text style={styles.textito}>Número</Text>
            </View>
        </View>
        <View style={styles.venderNav}>
        <Text style={styles.texti}>Vender</Text>
        </View>
        <View style={styles.vender}>
            <View style={styles.inputs}>
                <TextInput style={styles.input } placeholder='Nombre'></TextInput>
                <TextInput style={styles.input } placeholder='Apellido'></TextInput>
                <TextInput style={styles.input} placeholder='Dni'></TextInput>
            </View>
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.font}>Vender</Text>
            </TouchableOpacity>
            
        </View >
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
            width:'100%',
            height:'10%',
            textAlign:'center',
            textAlignVertical:'center',
            marginBottom:'2%'
        },
        menu:{
            
            width:'80%',
            height:'8%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            alignItems:'center',
            display:'flex',
            flexDirection:'row',
           
            
        },
        texto:{
            color:'#fff',
            left:'180%'
        },
        vendidas:{
            width:'80%',
            height:'13%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            top:'0.5%',
            alignItems:'center'
        },
        texti:{
            textAlign:'center',
           
            height:30,
            textAlignVertical:'bottom',
            color:'#fff',
           
        },
        num:{
            top:'9%',
            width:'30%',
            height:'45%',
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        venderNav:{
            width:'80%',
            height:'8%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            alignItems:'center',
            top:'3%'
            
        },
        vender:{
            width:'80%',
            height:'50%',
            backgroundColor:'rgba(255,255,255,0.7);',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            top:'3.5%',
            alignItems:'center'
        },
        inputs:{
            width:'98%',
            height:100,
            top:'10%'
        },
        input:{
            borderBottomColor:'#000',
            borderBottomWidth:1,
            textAlignVertical:'bottom',
            borderStyle:'dashed',
            marginBottom:'2%'
        },
        boton:{
            width:150,
            height:40,
            top:'40%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            borderColor:'#fff',
            borderWidth:1
        },
        font:{
            color:'#fff',
        }
      
        
       
});