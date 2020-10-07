import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles';
import PalettePreview from '../components/PalettePreview';
import COLOR_PALETTES from '../data/ColorPalettes';

const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.navigate('ColorPalette', item)}
            palette={item}
          />
        )}
      />
    </View>
  );
};

export default Home;
