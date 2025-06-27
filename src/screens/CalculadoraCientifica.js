import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalculadoraCientifica() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora Científica</Text>
      <Text style={styles.subtext}>Em construção...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor:'black'
    },
  text: { 
      fontSize: 24, 
      fontWeight: 'bold',
      color: '#fff'
    },
  subtext: { 
      fontSize: 18, 
      color: 'gray' 
    }
});