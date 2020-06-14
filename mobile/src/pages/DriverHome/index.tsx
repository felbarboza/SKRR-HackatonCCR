import React from 'react';
import {View, Image, ImageBackground, Linking, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, Link, NavigationContainer} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SideMenuDriver from '../SideMenu';

const DriverHome = () => {
  const navigation = useNavigation();

  function handleMap(){
    navigation.navigate('DriverMap');
  }
  function handleDriverPerfil(){
    navigation.navigate('DriverPerfil');
  }
  return(
    <>
    <View style = {styles.main}>
      <ScrollView style = {styles.container}>
        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>48 Horas</Text>
            <Text style={styles.freteHeaderText}>327 km</Text>
          </View>
          <View style={styles.freteDetail}>
            <Text style={styles.freteDetailText}>Origem: Curitiba/PR</Text>
            <Text style={styles.freteDetailText}>Destino: BR 277 - Km 72</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Frete: R$ 69,55</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>48 Horas</Text>
            <Text style={styles.freteHeaderText}>327 km</Text>
          </View>
          <View style={styles.freteDetail}>
            <Text style={styles.freteDetailText}>Origem: Curitiba/PR</Text>
            <Text style={styles.freteDetailText}>Destino: BR 277 - Km 72</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Frete: R$ 69,55</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>48 Horas</Text>
            <Text style={styles.freteHeaderText}>327 km</Text>
          </View>
          <View style={styles.freteDetail}>
            <Text style={styles.freteDetailText}>Origem: Curitiba/PR</Text>
            <Text style={styles.freteDetailText}>Destino: BR 277 - Km 72</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Frete: R$ 69,55</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.frete} onPress={handleMap}>
          <View style={styles.FreteHeader}>
            <Text style={styles.freteHeaderText}>48 Horas</Text>
            <Text style={styles.freteHeaderText}>327 km</Text>
          </View>
          <View style={styles.freteDetail}>
            <Text style={styles.freteDetailText}>Origem: Curitiba/PR</Text>
            <Text style={styles.freteDetailText}>Destino: BR 277 - Km 72</Text>
            <Text style={styles.freteDetailText}>Truck granaleiro</Text>
            <Text style={styles.freteDetailText}>Frete: R$ 69,55</Text>
          </View>
          <View style={{borderBottomWidth: 3, borderColor: '#C39151'}}></View>
          
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcons} onPress={handleDriverPerfil}>
          <Icon name="user" color="#FFF" size={44}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIcons}>
          <Icon name="home" color="#FFF" size={44}/>
        </TouchableOpacity>
        
      </View>
    </View>
    </>
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
    height: 200,
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

export default DriverHome;