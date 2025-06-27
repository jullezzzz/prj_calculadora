import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculadora from './src/screens/Calculadora';
import CalculadoraCientifica from './src/screens/CalculadoraCientifica';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calculadora">
        <Drawer.Screen name="Calculadora" component={Calculadora} />
        <Drawer.Screen name="CalculadoraCientifica" component={CalculadoraCientifica} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}