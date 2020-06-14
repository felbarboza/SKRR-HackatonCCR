import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/Home';
import TruckForm from './pages/TruckForm';
import DriverForm from './pages/DriverForm';
import DriverMap from './pages/DriverMap';
import ChooseSignUpType from './pages/ChooseSignUpType';
import DriverHome from './pages/DriverHome';
import ChooseUserType from './pages/ChooseUserType';
import OwnerHome from './pages/OwnerHome';
import OwnerMap from './pages/OwnerMap';
import DriverPerfil from './pages/DriverPerfil';
import TruckPerfil from './pages/TruckPerfil';
import SignUp from './pages/SignUp';
import CompanyForm from './pages/CompanyForm';
import CompanyHome from './pages/CompanyHome';
import SideMenuDriver from './pages/SideMenu';
import ServiceOrder from './pages/ServiceOrder';
import Paymethod from './pages/Paymethod';
import NewCard from './pages/NewCard';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator(
  
);



const Routes = () => {
  function MainDrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="DriverHome" component={DriverHome}/>
        <Drawer.Screen name="SideMenuDriver" component={SideMenuDriver} />
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator 
      headerMode="none" 
      screenOptions={{
        cardStyle:{
          backgroundColor: '#f0f0f5'
        }
      }}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="ChooseSignUp" component={ChooseSignUpType}/> 
        <AppStack.Screen name="ChooseUser" component={ChooseUserType}/> 
        <AppStack.Screen name="TruckForm" component={TruckForm}/>
        <AppStack.Screen name="DriverForm" component={DriverForm}/>
        <AppStack.Screen name="DriverHome" component={MainDrawerNavigator}/>
        <AppStack.Screen name="DriverMap" component={DriverMap}/>
        <AppStack.Screen name="OwnerHome" component={OwnerHome}/>
        <AppStack.Screen name="OwnerMap" component={OwnerMap}/>
        <AppStack.Screen name="DriverPerfil" component={DriverPerfil}/>
        <AppStack.Screen name="TruckPerfil" component={TruckPerfil}/>
        <AppStack.Screen name="SignUp" component={SignUp}/>
        <AppStack.Screen name="CompanyForm" component={CompanyForm}/>
        <AppStack.Screen name="CompanyHome" component={CompanyHome}/>
        <AppStack.Screen name="ServiceOrder" component={ServiceOrder}/>
        <AppStack.Screen name="Paymethod" component={Paymethod}/>
        <AppStack.Screen name="NewCard" component={NewCard}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;