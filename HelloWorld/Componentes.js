import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';

export default function Login() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> A MAIOR TORCIDA DO BRASIL! </Text>
  
        <Image style={styles.img} source={{uri:"https://pbs.twimg.com/media/Ec1ZfleXYAAcYFJ.jpg" }}>
        </Image>
  
  
    {/*     <Button color={'black'} title= 'SEJA SÓCIO!'>
            </Button>
   */}
  
  
        <TextInput style={styles.brinputxt} placeholder= 'Usuário ' maxLength={6}>
        </TextInput>
        <TextInput style={styles.brinputxt} placeholder= 'Senha ' maxLength={6}>
        </TextInput>
  
  
        <TouchableOpacity style={styles.brtt}>
          <Text style={styles.brtxt}>SEJA SÓCIO!</Text>
        </TouchableOpacity>
  
  
        <StatusBar style="auto" />
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
      paddingHorizontal: 5,
      backgroundColor: '#424243',
      borderRadius:  10,
      paddingHorizontal: 10,
    },
  
    brtxt:{
      color:'white',
      fontSize: 27,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  
    brinputxt:{
      paddingHorizontal: 50,
      borderWidth: 1,
      borderRadius: 10,
      color: 'black',
      borderColor: '#493e3e',
      marginBottom: '5%',
      fontSize: 25,
    },
  });