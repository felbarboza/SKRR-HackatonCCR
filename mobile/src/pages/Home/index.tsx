import React from 'react';
import {View, Image, ImageBackground, Linking, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, Link} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const navigation = useNavigation();

  function handleNatigateToUser(){
    navigation.navigate('ChooseUser');
  }
  function handleNavigateToSignUp(){
    navigation.navigate('SignUp');
  }

  return(
    <LinearGradient colors={['#FFF', '#FFF', '#FFF']} style={styles.linearGradient}>
    <View style={styles.container}>
    <Image style={styles.mapMarkerImage} source={require('../../assets/logo.png')}/> 
      <View style={styles.inputContainer}>
        <View style={styles.image}>
          <Icon name="user" color="#034db1f2" size={24}/>
          <TextInput style={styles.standardInput} textContentType="emailAddress" placeholder="E-MAIL"/>
        </View>

        <View style={styles.image}>
          <Icon name="lock" color="#034db1f2" size={24}/>
          <TextInput style={styles.standardInput} textContentType="password" placeholder="SENHA"/>
        </View>
      </View>
      <RectButton style={styles.button} onPress={handleNatigateToUser}>
          <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>
      <View style={styles.buttonContainer}>
        <Text style= {styles.p}>
          Nao tem  
        </Text>
        <TouchableOpacity onPress={handleNavigateToSignUp}>
          <Text style={styles.link}> Cadastro</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    </LinearGradient>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 0,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto_400Regular',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  mapMarkerImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 70
  },

  link:{
    color: '#ff9308',
    fontWeight: 'bold',
  },

  p:{
    marginTop: 35,
    color: '#034db1f2',
    marginBottom: 35,
  },

  image:{
    height: 40,
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginBottom: 80
  },

  standardInput:{
    marginTop: 0,
    marginHorizontal: 10,
    marginBottom: 0,
    paddingTop: 0,
    paddingHorizontal: 60,
    borderBottomColor: '#034db1f2',
    textAlign: 'center',
    borderBottomWidth: 2,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  linearGradient:{
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  inputContainer:{
    marginBottom: 10,
  },

  buttonContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 24,
    overflow: 'hidden',
  },

  button: {
    backgroundColor: '#1998D1',
    height: 60,
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal:50,

  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: '#1990C1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
  }
});

export default Home;