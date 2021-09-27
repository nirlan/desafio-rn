import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Filmes from './src/telas/Filmes';
import Detalhes from './src/telas/Detalhes'

function HomeScreen() {
  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <Filmes />
  </SafeAreaView>
}

function DetailsScreen() {
  return <Detalhes />
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Detalhes" component={DetailsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
