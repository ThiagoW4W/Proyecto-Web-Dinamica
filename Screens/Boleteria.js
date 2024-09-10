import { StyleSheet,View,Button,ImageBackground } from 'react-native';
const image= require("./../fondo.jpg")
import TabScreen from '../navigation/Tab';
import DrawerNav from '../navigation/Drawer'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function Boleteria() {
    return (
       
        <ImageBackground source={image} style={styles.container}>
       
        
        <View style={styles.container}>
       
        

        

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
    

}
});