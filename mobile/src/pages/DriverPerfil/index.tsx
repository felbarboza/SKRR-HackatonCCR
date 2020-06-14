import React from 'react';
import {View, Image, ImageBackground, Linking, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, Link} from '@react-navigation/native';

const DriverPerfil = () => {
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();;
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
        <Image style={styles.mapMarkerImage} source={require('../../assets/cam1.jpeg')}/> 
        <Text style={styles.title}>JOÃO</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Nome: João Cleopoldo</Text>
        <Text style={styles.bodyText}>Data de Nascimento: 01/05/1965</Text>
        <Text style={styles.bodyText}>CPF: 081.889.458-08</Text>
        <Text style={styles.bodyText}>CNH: 03982602266</Text>
        <Text style={styles.bodyText}>Exame Toxicológico: Em dia</Text>
      </View>
      <View style={{borderBottomWidth: 2, borderColor: '#000'}}></View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Avaliações:</Text>
        <Text style={styles.bodyText}>Entrega caminhoes em ótimo estado</Text>
        <Text style={styles.bodyText}>Entre os TOP em economia de combustível</Text>
      </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },

  mapMarkerImage: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 50,

  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 28,
  },

  button: {
    backgroundColor: '#1998D1',
    height: 50,
    width: 150,
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 120,
    marginHorizontal:100,
  }, 

  header:{
    backgroundColor: '#1998F9',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20
  },

  body:{
    marginBottom: 10,
    flexDirection: 'column'
  },

  bodyTitle:{
    color: '#1998F9',
    fontSize: 26,
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    fontWeight: 'bold',
    marginTop: 20
  },

  bodyText:{
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    padding: 5
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    paddingBottom: 20
  },

  title: {
    color: '#000',
    fontSize: 32,
    marginHorizontal: 20,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 300,
    marginTop: 10,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

});

export default DriverPerfil;