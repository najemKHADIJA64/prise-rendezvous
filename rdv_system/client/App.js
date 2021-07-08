import React from 'react';
// import { View } from 'react-native';
import Planing from './components/Planing';
import CreateRdv from './components/CreateRdv';
import { ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Planing />
      <CreateRdv />
    </ScrollView>
  );
};

export default App;
