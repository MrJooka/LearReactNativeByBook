import {SafeAreaView} from 'react-native';
import React from 'react';
import Box from './components/Box';

function App() {
  return (
    <SafeAreaView>
      <Box rounded color="black" size="large" />
    </SafeAreaView>
  );
}

export default App;
