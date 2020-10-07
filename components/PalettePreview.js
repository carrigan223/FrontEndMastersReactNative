import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const PalettePreview = ({ palette, onPress }) => {
  console.log(palette);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palette.colors.slice(0, 3)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.color, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

export default PalettePreview;
