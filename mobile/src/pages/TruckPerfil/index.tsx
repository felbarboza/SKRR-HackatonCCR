import React from 'react';
import {View, Image, ImageBackground, Linking, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, Link} from '@react-navigation/native';

const TruckPerfil = () => {
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
        <Image style={styles.mapMarkerImage} source={require('../../assets/caminhao.jpg')}/> 
        <Text style={styles.title}>CLEBER</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Nome: Cleber Machado</Text>
        <Text style={styles.bodyText}>Data de Nascimento: 06/02/1973</Text>
        <Text style={styles.bodyText}>CPF: 141.619.753-15</Text>
      </View>
      <View style={{borderBottomWidth: 2, borderColor: '#000'}}></View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Dados do caminhão:</Text>
        <Text style={styles.bodyText}>Modelo do Cavalo: EURO5</Text>
        <Text style={styles.bodyText}>Fabricante: SCANIA</Text>
        <Text style={styles.bodyText}>Placa: BEC8462</Text>
        <Text style={styles.bodyText}>Ano: 2016/2017</Text>
      </View>
      <View style={{borderBottomWidth: 2, borderColor: '#000'}}></View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Dados da Carreta:</Text>
        <Text style={styles.bodyText}>Modelo da Carroceria: Granaleiro</Text>
        <Text style={styles.bodyText}>Fabricante: GUERRA</Text>
        <Text style={styles.bodyText}>Placa: EAF1864</Text>
        <Text style={styles.bodyText}>Ano: 2014/2015</Text>
        <Text style={styles.bodyText}>Eixos: 3</Text>
        <Text style={styles.bodyText}>Descrição: 12,50 x 1,80 m</Text>
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
    marginTop: 10,
    flexDirection: 'column'
  },

  bodyTitle:{
    color: '#1998F9',
    fontSize: 26,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    marginTop: 3
  },

  bodyText:{
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
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

export default TruckPerfil;