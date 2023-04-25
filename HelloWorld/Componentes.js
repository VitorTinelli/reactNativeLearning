import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Hooks from './Hooks';

export default function Login({navigation}) {
    const [user, setUser] = useState("")
    const [senha, setSenha] = useState(0)
    const [result, setResult] = useState("")

    function Verify(){
      if ((user == "Omega")&&(senha == 123)){
        setResult("")
        navigation.navigate('Hooks')
      } else{
        setResult("Usuário ou senha incorretos!")
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.txt}> A MAIOR TORCIDA DO BRASIL! </Text>
  
        <Image style={styles.img} source={require("./assets/logo.png")}> 
        {/*uri removido pq queria a mesma imagem sem fundo */}
        </Image>
  
  
    {/*     <Button color={'black'} title= 'SEJA SÓCIO!'>
            </Button>
   */}
  
  
        <TextInput style={styles.brinputxt} placeholder= 'Usuário ' maxLength={10} onChangeText={setUser} textAlign={'center'}>
        </TextInput>
        <TextInput style={styles.brinputxt} placeholder= 'Senha ' maxLength={12} onChangeText={setSenha} textAlign={'center'}>
        </TextInput>
    
  
  
        <TouchableOpacity style={styles.brtt} onPress={Verify}>
          <Text style={styles.brtxt}>ENTRAR</Text>
        </TouchableOpacity>
        <Text>
          {result}
        </Text>
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
      paddingVertical: 5,
      backgroundColor: '#424243',
      borderRadius:  15,
      paddingHorizontal: 20,
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
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
      width: '50%',
    },
  });