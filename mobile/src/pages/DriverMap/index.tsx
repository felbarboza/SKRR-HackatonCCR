import React from 'react';
import {Dimensions, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {useNavigation, Link} from '@react-navigation/native';
import {Feather as Icon} from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';

const coordinates = [{
  latitude: -25.4508899,
  longitude: -49.2921586
},
{
  latitude: -25.4145751,
  longitude: -49.2548222,
}];


const DriverMap = () =>{
  const navigation = useNavigation();

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
        <MapView 
          style={styles.map} 
          initialRegion={{
            latitude: (coordinates[0].latitude+coordinates[1].latitude)/2, 
            longitude: (coordinates[0].longitude+coordinates[1].longitude)/2, 
            latitudeDelta: 0.052, 
            longitudeDelta: 0.052,
          }}
        >
          <Marker 
            style={styles.mapMarker} 
            coordinate={coordinates[0]} 
            >
              <View style={styles.mapMarkerContainer}>
                <Image style={styles.mapMarkerImage} source={require('../../assets/caminhao.jpg')}/> 
                <Text>Caminhão</Text>
              </View>
          </Marker>
          <Marker style={styles.mapMarker} 
            coordinate={coordinates[1]}>
             <View style={styles.mapMarkerContainer}>
              <Icon name="user" color="#FFF" size={44}/>
                <Text>Você</Text>
              </View>
          </Marker>
          </MapView>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20 ,
    paddingBottom: 40
  },

  header:{
    backgroundColor: '#1998F9',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80, 
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#34CB79',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
});

export default DriverMap;