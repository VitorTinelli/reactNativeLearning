import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, TextInput} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function InputText({navigation}){
    const [name, setName] = useState("Vitor Tinelli");
    const [count, setCount] = useState(0);
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [soma, SetSoma] = useState(0);
    function Alterar(){
        setName("Pobre!");
    }
    function Somar(){
        SetSoma(Number(num1) + Number(num2));
    }

    return(
        <SafeAreaView style={styles.container}>

            <Text style={styles.txt}>Calculo: {soma}</Text>

            <TextInput placeholder = 'Num1' style={styles.brinputxt} value={num1} onChangeText={setNum1}/>
            <TextInput placeholder = 'Num2' style={styles.brinputxt} value={num2} onChangeText={setNum2}/>

            <TouchableOpacity style={styles.brtt} onPress={Somar}>
                <Text style={styles.brtxt}> + </Text>
            </TouchableOpacity>
            <Text>{num1}</Text>
            <Text>{num2}</Text>
                
            
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
        marginTop: '10%',
    },
    
    brtxt:{
        fontSize: 27,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#FFFF',
    },
  }
)