import { ImageBackground, StyleSheet, Text, View, Image,TouchableOpacity,ScrollView } from 'react-native';
const image = require('./../fondo.jpg');
export default function Ayuda({ navigation }) {
    
    return (
        <ImageBackground source={image} style={styles.Container}>
             <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.navigate('inicia')}><Image source={require("../img/left.png")}></Image></TouchableOpacity>
                <Text style={styles.textoBlanco}>Manual de uso</Text>
             </View>
             <View style={styles.box}>
           
                    <View style={styles.intro}>
                        <Text style={styles.titulo}>Sobre Nosotros</Text>
                        <Text style={styles.textoBlanco}>Es una aplicacion diseñada para facilitar la gestión de diversas tareas administrativas en un recinto nocturno,
                             destacando por su gran usabilidad e interfaz bien elaborada. Cada aspecto ha sido cuidadosamente plpanificado para
                             garantizar que su utilizacion resulte lo más práctica y sencilla posible para el usuario. En caso de tener alguna
                             duda sobre su uso, ponemos a disposición una guía detallada de uso por ítems correspondientes</Text>
                    </View>
                    <View style={styles.scrollableInfo}>
                        <ScrollView>
                            <View style={styles.item1}>
                                <Text style={styles.titulo}>2.¿Cómo se agrega tareas a la checklist?</Text>
                                <Image source={require("../img/Checklist.jpeg")} style={styles.imagenSize}></Image>
                                <Text style={styles.textoBlanco}>Para agregar una tarea, se añade el texto en el campo vacio y se da clic en añadir</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text style={styles.titulo}>1.¿Cómo Eliminar un ropero?</Text>
                                <Image source={require("../img/Ropero.jpeg")} style={styles.imagenSize}></Image>
                                <Text style={styles.textoBlanco}>Para eliminar un ropero se debe pulsar el bloque o casillero que aparece luego de su creación. Al hacerlo se abre una pantalla emergente para confirmar la eliminacion. Se pulsa si y luego de esto se eliminará.</Text>
                            </View>

                        </ScrollView>
                    </View>
                    
             </View>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        alignProductos: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: '100%',
    },
    box: {
        width: '80%',
        height: '80%',
        backgroundColor:'rgba(255,255,255,0.7);',
        top: '4%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    nav:{
        width:'80%',
        width:'80%',
        height:'8%',
        backgroundColor:'rgba(255,255,255,0.7);',
        top: 20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
        
    },
    intro:{
        width:'100%',
        height:'40%',
        marginBottom:'5%'
     
    },
    titulo:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        marginBottom:'5%'
    },
    textoBlanco:{
        color:'#fff',
        textAlign:'justify'
    },
    scrollableInfo:{
        width:'100%',
        height:'57%',

    },
    item1:{
        width:'100%',
        height:250,
        alignItems:'center',
        marginBottom:'5%'
    },
    imagenSize:{
        width:200,
        height:100,
        borderColor:'#fff',
        borderWidth:2,
        resizeMode:'stretch'
    }
});