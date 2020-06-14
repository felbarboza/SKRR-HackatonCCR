import React, {useState} from 'react';
import {View, Picker, ImageBackgroundComponent, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const ServiceOrder = () =>{
  const [selectedValue, setSelectedValue] = useState();
  const [selectedTruck, setSelectedTruck] = useState();
  const [selectedCarreta, setSelectedCarreta] = useState();
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  function handleSave(){
    navigation.goBack();
  }
  function handlePayMethod(){
    navigation.navigate('Paymethod');
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
        <Text style={styles.title}>O que precisa transportar?</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Peso da carga (kg)"/>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Lotação" value="java" />
            <Picker.Item label="Fracionada" value="js" />
          </Picker>

          <Picker
            selectedValue={selectedTruck}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setSelectedTruck(itemValue)}
          >
            <Picker.Item label="Tipo do caminhao" value="java" />
            <Picker.Item label="Urbano de carga" value="js" />
            <Picker.Item label="Semi-pesado" value="js" />
            <Picker.Item label="Pesado" value="js" />
            <Picker.Item label="Extra-pesado" value="js" />
            <Picker.Item label="Cavalo Mecânico Trucado" value="js" />
            <Picker.Item label="Carreta 2 eixos" value="js" />
            <Picker.Item label="Carreta 3 eixos" value="js" />
            <Picker.Item label="Cavalo Trucado" value="js" />
          </Picker>

          <Picker
            selectedValue={selectedCarreta}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setSelectedCarreta(itemValue)}
          >
            <Picker.Item label="Tipo Carroceria" value="java" />
            <Picker.Item label="Basculante" value="js" />
            <Picker.Item label="Carrega-tudo" value="js" />
            <Picker.Item label="Florestal" value="js" />
            <Picker.Item label="Furgão" value="js" />
            <Picker.Item label="Granaleiro" value="js" />
            <Picker.Item label="Linha-leve" value="js" />
            <Picker.Item label="Porta-Container" value="js" />
            <Picker.Item label="Tanque" value="js" />
          </Picker>
          <TextInput style={styles.input} placeholder="Nome do Responsável"/>
          <TextInput style={styles.input} placeholder="Produto a ser carregado"/>
          <TextInput style={styles.input} placeholder="Data de despache"/>
          <TextInput style={styles.input} placeholder="CEP de despache"/>
          <TextInput style={styles.input} placeholder="Endereço de despache"/>
          <TextInput style={styles.input} placeholder="Data de entrega"/>
          <TextInput style={styles.input} placeholder="CEP de entrega"/>
          <TextInput style={styles.input} placeholder="Endereço de entrega"/>
        </View>
        <RectButton style={styles.button} onPress={handlePayMethod}>
          <Text style={styles.buttonText}>Meio de pagamento</Text>
        </RectButton>
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

export default ServiceOrder;

