import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Hooks from './Hooks';

export default function Menu({navigation}) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.brtt} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.brtxt}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.brtt} onPress={() => navigation.navigate('Hooks')}>
            <Text style={styles.brtxt}>HOOKS</Text>
            </TouchableOpacity>

       </View>
    );
  }
  
  const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#E8E8E8',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    txt:{
      color:'black',
      fontSize: 27,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontFamily: 'sans-serif',
    },
  
    img:{
      width:220,
      height: 220,
      marginBottom: 50,
      marginTop: 50,
    },
  
    brtt:{
      backgroundColor: '#424243',
      borderRadius:  15,
      paddingVertical: '3%',
      paddingHorizontal: '10%',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '3%',
    },
  
    brtxt:{
      fontSize: 27,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: '#FFFF',
    },
  
    brinputxt:{
      paddingHorizontal: 50,
      borderWidth: 1,
      borderRadius: 10,
      color: 'black',
      borderColor: '#493e3e',
      marginBottom: '5%',
      fontSize: 25,
      width: 200,
    },
  });