import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, }) => {
  const [palettes, setPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    );
    const colors = await result.json();
    if (result.ok) {
      setPalettes(colors);
    }
  });

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  console.log(`this is ${palettes}`);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={palettes}
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
