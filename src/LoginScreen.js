import { View, Text, TouchableOpacity ,StyleSheet,TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export default function LoginScreen({ navigation }) {

    const [username,setUsername]=useState("")

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['email',
        'public_profile',
        'user_friends',]);
      
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
      }

      GoogleSignin.configure({
        webClientId: '601840133910-th0jfal9789nh5luu4ssfsnkqngg9ut9.apps.googleusercontent.com',
      })


      async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
      

  return (
    <SafeAreaView style={{ padding:10 }}>

     <View style={{ marginVertical:30 }}>
     <TouchableOpacity onPress={()=>{onFacebookButtonPress().then((e) =>  {
        console.warn(e)
        navigation.navigate('DeshboardScreen',{data:username})
    })
       }}>
        <View style={{ backgroundColor:"#000",alignItems:"center",height:50,justifyContent:"center" }}>
            <Text style={{ color:"#fff", }}>Facebook login</Text>
        </View>
      </TouchableOpacity>
     </View>

      <TouchableOpacity onPress={()=>{
        onGoogleButtonPress().then((e) => {
            console.warn(e)
            // navigation.navigate('DeshboardScreen',{data:username})
        })
        }}>
        <View style={{ backgroundColor:"#000",alignItems:"center",height:50,justifyContent:"center" }}>
            <Text style={{ color:"#fff", }}>Google login</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });