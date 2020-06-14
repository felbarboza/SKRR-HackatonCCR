import React from 'react';
import {View, Image, ImageBackgroundComponent, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const NewCard = () =>{
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  function handleSave(){
    navigation.goBack();
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
        <Image style={styles.mapMarkerImage} source={require('../../assets/credit.jpg')}/>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Número do cartao"/>
          <View style={styles.inputDataContainer}>
          <TextInput style={styles.inputData} placeholder="Data de expedição"/>
          <TextInput style={styles.inputData} placeholder="CVC"/>
          </View>
          <TextInput style={styles.input} placeholder="Nome no Cartão"/>
          <RectButton style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar Cartão</Text>
        </RectButton>
        </View>
        
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  or:{
    flexDirection: 'row'
  },
  ou:{
    fontSize: 40,
    color: '#1998F9'
  },
  card:{
    width: 250,
    height: 70,
    shadowColor: '#000',
    borderRadius: 20,
    shadowOpacity: 10,
    shadowRadius: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingTop: 10,

  },
  cardText:{
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom:10
  },

  header:{
    backgroundColor: '#1998F9',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 10
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    paddingBottom: 10
  },

  title: {
    color: '#000',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 300,
    marginTop: 64,
  },
  mapMarkerImage: {
    width: 300,
    height: 200,
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
    width: 250,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 80,
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

export default NewCard;

