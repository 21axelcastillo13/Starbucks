/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useImperativeHandle, useState } from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pantallas/login'
import OTP from './pantallas/otp';
import Details from './pantallas/details';
import Inicio from './pantallas/inicio';
import  { MyDrawer } from './pantallas/Drawer/DraweScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const Stack=createNativeStackNavigator();

function App(): React.JSX.Element {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#006241',
      },
      headerTintColor:'#ffffff',
      headerTitleAlign:'center',
    }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="OTP" component={OTP}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="Inicio" component={MyDrawer} options={{ title: "STARBUCKS" }} />
    </Stack.Navigator>
    
  </NavigationContainer>;

};
export default App;
