import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName={'Cyan'} hexCode={'#2aa198'} />
        <ColorBox colorName={'Blue'} hexCode={'#268bd2'} />
        <ColorBox colorName={'Magenta'} hexCode={'#d33682'} />
        <ColorBox colorName={'Orange'} hexCode={'#cb4b16'} />
      </View>
      <ColorBox />
    </SafeAreaView>
  );
};

export default App;
