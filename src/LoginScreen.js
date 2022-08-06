import { View, Text, TouchableOpacity ,StyleSheet,TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen({ navigation }) {

    const [username,setUsername]=useState("")

  return (
    <SafeAreaView style={{ padding:10 }}>
      
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setUsername(e)}
        value={username}
        placeholder="login"
        keyboardType="default"
      />

      <TouchableOpacity onPress={()=>{navigation.navigate('DeshboardScreen',{data:username})}}>
        <View style={{ backgroundColor:"#000",alignItems:"center",height:50,justifyContent:"center" }}>
            <Text style={{ color:"#fff", }}>Next Screen</Text>
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