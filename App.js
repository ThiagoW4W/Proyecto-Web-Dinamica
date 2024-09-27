import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, extInput, Button, Alert, ImageBackground ,TouchableOpacity } from 'react-native';
import Login from './login';
import Zonas from './zonas';

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <Zonas/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});