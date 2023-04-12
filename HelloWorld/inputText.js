import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, TextInput} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function InputText(){
    const [name, setName] = useState("Vitor Tinelli");
    function Alterar(){
        setName("Pobre!")
    }
    return(
        <SafeAreaView style={styles.container}>

            <Text style={styles.txt}>Seja bem-vindo, {name}</Text>

            <TextInput placeholder = 'Nome' style={styles.brinputxt} value={name} onChangeText={setName}/>
            <TouchableOpacity style={styles.brtt} onPress={Alterar}>
            <Text style={styles.brtxt}> ALTERAR </Text>
            </TouchableOpacity>
                
            
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    brinputxt:{
        borderWidth: 1,
        borderRadius: 10,
        color: 'black',
        borderColor: '#493e3e',
        marginTop: '5%',
        fontSize: 25,
        width: '50%',
        textAlign: 'center',
        paddingHorizontal: '5%',
      },

    brtt:{
        paddingVertical: 5,
        backgroundColor: '#424243',
        borderRadius:  10,
        paddingHorizontal: 20,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '2%',
        marginTop: '5%',
    },
    
    brtxt:{
        fontSize: 27,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#FFFF',
    },
  }
)