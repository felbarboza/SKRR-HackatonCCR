import React from 'react';
import {View, Image, ImageBackgroundComponent, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const TruckForm = () =>{
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();;
  }

  function handleSave(){
    navigation.navigate('Home');
  }

  return (
<>
    <View style={styles.header}> 
      <TouchableOpacity onPress={handleBack}>
      <Icon name="arrow-left" color="#FFF" size={24}/>
      </TouchableOpacity>
    </View>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.main}>
        <Text style={styles.title}>Cadastro de caminhao</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Modelo do cavalo"/>
          <TextInput style={styles.input} placeholder="Fabricante"/>
          <View style={styles.inputDataContainer}>
          <TextInput style={styles.inputData} placeholder="Placa"/>
          <TextInput style={styles.inputData} placeholder="  /  /  "/>
          </View>
          <TextInput style={styles.input} placeholder="Modelo da carreta"/>
          <TextInput style={styles.input} placeholder="Fabricante da carreta"/>
          <View style={styles.inputDataContainer}>
          <TextInput style={styles.inputData} placeholder="Placa"/>
          <TextInput style={styles.inputData} placeholder="  /  /  "/>
          </View>
          <TextInput style={styles.input} placeholder="Agência Bancária"/>
          <TextInput style={styles.input} placeholder="Conta Bancária"/>
          <TextInput style={styles.input} placeholder="Preço do aluguel por 100km"/>
        </View>
        <RectButton style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </RectButton>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },

  header:{
    backgroundColor: '#1998D1',
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

export default TruckForm;

