import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import PalettePreview from '../components/PalettePreview';
import { RefreshControl } from 'react-native';
//we are passing navigation and also the route params(current state) from the model screen
const Home = ({ navigation, route }) => {
  //newPallete is checking if home is receiveing params if not null
  const newPalette = route.params ? route.params.newPalette : null;
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
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchColorPalettes]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]); //why doesanything other then an empty array give me a loop?
  //read more on exhaustive deps, apperently the fetch needs an  empty array
  //to close and the useEffect takes fetchColorPalettes

  //useEffect so it is dynamic for the rendering cycle
  useEffect(() => {
    if (newPalette) {
      setPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  return (
    <View style={styles.screenBack}>
      <TouchableOpacity onPress={() => navigation.navigate('AddNewPalette')}>
        <Text style={styles.addButton}>Add a color scheme</Text>
      </TouchableOpacity>
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
