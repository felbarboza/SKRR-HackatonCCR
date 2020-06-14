import React from 'react';
import {View, Image, ImageBackgroundComponent, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const ChooseUserType = () => {
  const navigation = useNavigation();
  function handleNavigateToTruck(){
    navigation.navigate('OwnerHome');
  }

  function handleNavigateToDriver(){
    navigation.navigate('DriverHome');
  }
  function handleNavigateToCompany(){
    navigation.navigate('CompanyHome');   
  }
  function handleBack(){
    navigation.goBack();;
  }

  return(
    <>
    <View style={styles.header}> 
    <TouchableOpacity onPress={handleBack}>
     <Icon name="arrow-left" color="#FFF" size={24}/>
    </TouchableOpacity>
    </View>
    <View style={styles.container}>
      

      <Text style={styles.title}>Escolha a sua modalidade</Text>
      <RectButton style={styles.button} onPress={handleNavigateToCompany}>
            <Text style={styles.buttonText}>Empresa</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={handleNavigateToDriver}>
            <Text style={styles.buttonText}>Motorista</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={handleNavigateToTruck}>
            <Text style={styles.buttonText}>Alugar Caminhao</Text>
      </RectButton>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 0,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto_400Regular',
  },
  header:{
    backgroundColor: '#1998D1',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20
  },
  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginBottom: 40
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


export default ChooseUserType;