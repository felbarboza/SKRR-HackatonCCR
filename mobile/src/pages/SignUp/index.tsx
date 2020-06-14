import React from 'react';
import {View, Image, ImageBackgroundComponent, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const SignUp = () =>{
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();;
  }

  function handleSave(){
    navigation.navigate('ChooseSignUp');
  }

  return (
  <>
    <View style={styles.header}> 
      <TouchableOpacity onPress={handleBack}>
        <Icon name="arrow-left" color="#FFF" size={24}/>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      
      <View style={styles.main}>
        <Text style={styles.title}>Crie sua conta!</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Nome Completo"/>
          <TextInput style={styles.input} placeholder="CPF"/>
          <TextInput style={styles.input} placeholder="CHN"/>
          <TextInput style={styles.input} placeholder="Data de nascimento"/>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput style={styles.input} placeholder="Senha"/>
          <TextInput style={styles.input} placeholder="CEP"/>
          <TextInput style={styles.input} placeholder="Endereço"/>
          
        </View>
        <RectButton style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </RectButton>
      </ScrollView>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },

  header:{
    backgroundColor: '#1998F9',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    paddingBottom: 100
  },

  title: {
    color: '#000',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 300,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  body: {},

  select: {},

  input: {
    height: 50,
    width: 305,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  inputData: {
    height: 50,
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    marginHorizontal: 5
  },

  inputContainer:{
    marginBottom: 20,
    marginTop: 15,
    alignItems: 'center'
  },

  inputDataContainer:{
    flexDirection: 'row'
  },

  button: {
    backgroundColor: '#1998F9',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: '#01FF70',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default SignUp;

