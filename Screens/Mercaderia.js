import { StyleSheet,View,ImageBackground,Text,Image,TouchableOpacity } from 'react-native';
const image= require("./../fondo.jpg")

export default function Mercaderia({navigation}) {
    return (
       
        <ImageBackground source={image} style={styles.container}>
        <Text style={styles.titulo}>Mercaderia</Text>
        <Text style={styles.texto}>Productos</Text>
        
        <View style={styles.box}>
            <View style={styles.navSup}>
            <TouchableOpacity onPress={() => navigation.navigate('inicia')}><Image source={require("../img/left.png")} style = {styles.imagen}></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('mercaderias')}><Text style={styles.Text}>Lista</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('stocks')}><Text style={styles.myText}>Stock</Text></TouchableOpacity>
            </View>
            <View style={styles.items}>
                <View style={styles.item}>
                    <View style={styles.circle}></View>
                    <View style={styles.object}>
                        <Text>Cerveza</Text>
                    </View>
                    <View style={styles.object}>
                        <Text>$2000</Text>
                    </View>
                </View>
                
            </View>
            <View style={styles.position}>
            <View style={styles.buttons}>
            <TouchableOpacity onPress={() => navigation.navigate('checklists')}><Image source={require("../img/option.png")} style = {styles.imagen}></Image></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('new')}><Image source={require("../img/add.png")} style = {styles.imagen}></Image></TouchableOpacity>
            </View>
            </View>
        </View>

        
        
     
        </ImageBackground>
        
    
   
    
       

    );
}

const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'auto',
    height:'100%',
    

},
box:{
    width:'70%',
    height:'80%',
    backgroundColor:'white',
    opacity: 0.7,
    top:20,
    borderRadius:10,
},
titulo:{
color:'white',
fontSize:30,
},
texto:{
color:'white',
top:10,
},
navSup:{
width:'100%',
height:'10%',
borderTopStartRadius:10,
borderTopEndRadius:10,
borderBottomWidth:3,
borderColor:'black',
borderStyle:'solid',
alignItems:'center',
flexDirection:'row',
justifyContent:'space-around'
},
items:{
width:'100%',
height:'80%',
borderBottomLeftRadius:10,
borderBottomRightRadius:10,



},
item:{
backgroundColor:'black',
width:'100%',
height:'10%',
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',
marginTop:'5%'
},
circle:{
width:'13%',
height:'85%',
backgroundColor:'white',
borderRadius:20,

},
object:{
width:'35%',
height:'75%',
backgroundColor:'white',
borderRadius:5,
display:'flex',
justifyContent:'center',
alignItems:'center',
},
buttons:{

width:'35%',
height:'10%',
position:'relative',
borderBottomLeftRadius:10,
borderBottomRightRadius:10,
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',



},
position:{
    width:'100%',
height:'100%',
position:'relative',
display:'flex',
marginLeft:'65%'
},
myText:{
borderStyle:'solid',
borderColor:'white',
borderBottomWidth:2,
color:'white',

},
Text:{
    color:'black',
    borderBottomColor:'white',
    borderBottomWidth:2
}


});