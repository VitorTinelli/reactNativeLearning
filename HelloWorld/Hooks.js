import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, TextInput} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Hooks({navigation}){
    const [name, setName] = useState("Vitor Tinelli");
    const [count, setCount] = useState(0) 
    const [count2, setCount2] = useState(0) 
    const [result, setResult] = useState(0)
    
    // function Alterar(){
    //     setName("Pobre!")
    // }
    
    function Somar1(){
        setCount(count+1)
    }

    function Decrementar1(){
        setCount(count-1)
    }

    function Somar2(){
        setCount2(count2+1)
    }

    function Decrementar2(){
        setCount2(count2-1)
    }

    function Resultado(){
        setResult(count + count2)
    }

    function Clear(){
        setCount(0)
        setCount2(0)
        setResult(0)
    }
    


    return(
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.text}>Seja bem-vindo, {name}</Text>
        <Text style={styles.text}>Contador: {count}</Text>
        {/* <TouchableOpacity style={styles.brtt} onPress={Alterar}>
          <Text style={styles.brtxt}>ALTERAR</Text>
        </TouchableOpacity> */}

        <View style={styles.buttons}>
        <TouchableOpacity style={styles.brtt} onPress ={Somar1}>
          <Text style={styles.brtxt}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.brtt} onPress={Decrementar1}>
          <Text style={styles.brtxt}> - </Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.text}>Contador2: {count2}</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.brtt} onPress={Somar2}>
          <Text style={styles.brtxt}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.brtt} onPress={Decrementar2}>
          <Text style={styles.brtxt}> - </Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.text}>Resultado : {result}</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.brtt} onPress={Resultado}>
            <Text style={styles.brtxt}> = </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.brtt} onPress={Clear}>
            <Text style={styles.brtxt}> C </Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
        </SafeAreaView>
    );
             
}
const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        marginTop: '5%',
        },

    brtt:{
        paddingVertical: 5,
        backgroundColor: '#424243',
        borderRadius:  10,
        paddingHorizontal: 20,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '2%',
      },
    
    brtxt:{
        fontSize: 27,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#FFFF',
    },

    clear: {
        paddingVertical: 5,
        backgroundColor: '#424243',
        borderRadius:  10,
        paddingHorizontal: 20,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '2%',
        marginTop: '8%',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '10%',
    },

})