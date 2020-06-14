import React from 'react';
import {View, Image, ImageBackground, Linking, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, Link} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const CompanyHome = () => {
  const navigation = useNavigation();

  function handleMap(){
    navigation.navigate('OwnerMap');
  }
  function handleServiceOrder(){
    navigation.navigate('ServiceOrder');
  }
  return(
    <View style = {styles.main}>
      <ScrollView style = {styles.container}>
        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>Carga 23</Text>
            <Image style={styles.mapMarkerImage} source={require('../../assets/caminhao.jpg')}/> 
          </View>
          <View style={styles.freteDetail}>
          <Text style={styles.freteDetailText}>Situação: ATIVO</Text>
            <Text style={styles.freteDetailText}>Rumo a Belo Horizonte/MG</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Placa: ABC1234</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>Carga 16</Text>
            <Image style={styles.mapMarkerImage} source={require('../../assets/caminhao.jpg')}/> 
          </View>
          <View style={styles.freteDetail}>
          <Text style={styles.freteDetailText}>Situação: PARADO</Text>
            <Text style={styles.freteDetailText}>Rumo a Cascavel/CE</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Placa: ABC1234</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>Carga 02</Text>
            <Image style={styles.mapMarkerImage} source={require('../../assets/caminhao.jpg')}/> 
          </View>
          <View style={styles.freteDetail}>
          <Text style={styles.freteDetailText}>Situação: ATIVO</Text>
            <Text style={styles.freteDetailText}>Rumo a Belo Horizonte/MG</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Placa: ABC1234</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>
       
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcons} onPress={handleServiceOrder}>
          <Icon name="plus-square" color="#FFF" size={44}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcons}>
          <Icon name="home" color="#FFF" size={44}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcons}>
          <Icon name="menu" color="#FFF" size={44}/>
        </TouchableOpacity>
        
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 60,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 0,
    flexDirection: 'column',
    fontFamily: 'Roboto_400Regular',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1998F9'
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  footer:{
    backgroundColor: '#1998F9',
    height: 80,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'center',
  },

  footerIcons:{
    marginHorizontal: 50
  },

  frete:{
    height: 210,
    borderRadius: 20,
    width: '100%',
    backgroundColor: '#F0F0F0',
    marginBottom: 40
  },

  freteDetail:{
    paddingHorizontal:10,
    marginTop: 10,
    marginBottom: 20
  },

  freteDetailText:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#000000'
  },

  freteHeaderText:{
    fontWeight: 'bold',
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
  },

  FreteHeader:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  }

});

export default CompanyHome;