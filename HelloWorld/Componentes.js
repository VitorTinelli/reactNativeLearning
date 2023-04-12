import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';

export default function Login() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> A MAIOR TORCIDA DO BRASIL! </Text>
  
        <Image style={styles.img} source={require("./assets/logo.png")}> 
        {/*uri removido pq queria a mesma imagem sem fundo */}
        </Image>
  
  
    {/*     <Button color={'black'} title= 'SEJA SÓCIO!'>
            </Button>
   */}
  
  
        <TextInput style={styles.brinputxt} placeholder= 'Usuário ' maxLength={10}>
        </TextInput>
        <TextInput style={styles.brinputxt} placeholder= 'Senha ' maxLength={12}>
        </TextInput>
  
  
        <TouchableOpacity style={styles.brtt}>
          <Text style={styles.brtxt}>SEJA SÓCIO!</Text>
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
      paddingVertical: 5,
      backgroundColor: '#424243',
      borderRadius:  10,
      paddingHorizontal: 20,
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