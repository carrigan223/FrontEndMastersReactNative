import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles';
import PalettePreview from '../components/PalettePreview';
import { RefreshControl } from 'react-native';
import { color } from 'react-native-reanimated';

const Home = ({ navigation }) => {
  //below we are fetching the color palette api and then seting
  //it using useState then rendering it in our flatlist
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    );

    if (response.ok) {
      const colors = await response.json();
      setPalettes(colors);
    } else {
      throw Error('no Colors');
    }
  });

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  console.log(`this is ${palettes}`);

  return (
    <View style={styles.screenBack}>
      <FlatList
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
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
