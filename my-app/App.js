import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './src/screens/ProfileScreen';
import DuelScreen from './src/screens/DuelScreen';
import DashboardScreen from './src/screens/DashboardScreen';

const Stack = createStackNavigator(); // This was missing

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Duel" component={DuelScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screesn</Text>
    </View>
  );
}