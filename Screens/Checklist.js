import { StyleSheet,View,Button,Text } from 'react-native';
import TabScreen from '../navigation/Tab';
import { NavigationContainer } from '@react-navigation/native';
export default function Checklist({navigation}) {
  
    return (
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text>Checklist!</Text>
        </View>





















         <Button onPress={() => navigation.goBack()}
        title="inicio"></Button>
      
      </View>
    );
   
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      width:250,
      height:250,

    },
  });