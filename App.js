import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
