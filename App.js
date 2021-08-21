import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native';

export default function App() {

  const [text, setText] = useState('React Native')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{text}</Text>
      </View>

      <View style={styles.body}>

          <View style={styles.main}>
            <TextInput
              
              onChangeText={text => setText(text)} 
              style={styles.input} 
              placeholder="Escriba aqui..."/>
            <Button
            title="Click me"/>

          </View>
         

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection:'column',
   alignItems:'center',
   backgroundColor:'#dfe6e9',
   justifyContent:'space-evenly'
  
  },
  header:{
    marginTop:20
  },
  title:{
    fontSize:30,
    fontWeight:'bold'
  },
  main:{
    flexDirection:'row',
    
  },
  input:{
    padding:5,
    height:40,
    width:'70%',
    backgroundColor:'white',
    borderRadius:5,
    marginRight:20
  },
  btn:{
    marginTop:20,
    width:'100px'
  },
 
});
