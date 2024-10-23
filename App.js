import DrawerNav from './navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/login';
import Registro from './Screens/Registro'
import React,{useState,createContext,useContext,useEffect} from 'react';
import { View,ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
const Stack = createStackNavigator();
const AuthenticatedUserContext=createContext({});
const AuthenticatedUserProvider= ({children})=>{
  const [user,setUser]=useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user,setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}
function InitialScreen (){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} defaultScreenOptions={Login}> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  )
}
function SecondScreen(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}> 
       <Stack.Screen name="DrawerNav" component={DrawerNav} />
    </Stack.Navigator>
  )
}
function RootNavigator(){
  const {user,setUser}=useContext(AuthenticatedUserContext);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, async authenticatedUser=>{
      authenticatedUser? setUser(authenticatedUser) :setUser(null);
      setLoading(false);
    });
    return()=> unsubscribe();
  },[user]);
  if (loading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
      </View>
    )
  }
  return(
    <NavigationContainer>
    { user ? <SecondScreen/> : <InitialScreen/>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator></RootNavigator>
    </AuthenticatedUserProvider>
  );
}