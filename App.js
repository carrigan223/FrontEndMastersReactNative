import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
