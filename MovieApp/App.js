import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Filmes from './src/telas/Filmes';

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Filmes />
      </SafeAreaView>
    </NavigationContainer>
  );
}
