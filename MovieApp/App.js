import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Filmes from './src/telas/Filmes';

import mock from './src/mocks/filmes';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Filmes {...mock}/>
    </SafeAreaView>
  );
}
