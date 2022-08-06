import { View, Text,SafeAreaView,Dimensions  } from 'react-native'
import React from 'react'
import LoginScreen from './src/LoginScreen'
import DeshboardScreen from './src/DeshboardScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function ChatApp() {

  const AuthStackDark = createNativeStackNavigator();
const AuthScreenDark = () => (
  <AuthStackDark.Navigator screenOptions={{headerShown: true}}>
    <AuthStackDark.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStackDark.Screen name="DeshboardScreen" component={DeshboardScreen} />
  </AuthStackDark.Navigator>
);


  return (
    // <SafeAreaView>
       <NavigationContainer>
          <AuthScreenDark/>
        </NavigationContainer>
    // </SafeAreaView >
  )
}