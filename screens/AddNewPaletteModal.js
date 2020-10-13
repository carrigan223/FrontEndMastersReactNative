import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Switch,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../data/ColorArrays';

const AddNewPaletteModal = ({ navigation }) => {
  const [name, setName] = useState(''); //we are saving the text we have inputed in state
  const [selectedColors, setSelectedColors] = useState([]); //recording the colors we have toggled to include
  console.log(selectedColors, name);

  //handleUpdate is a callback we are using to check if the color is currently in our array
  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors((current) => [...current, color]); //if this is a new value we are spreading the array and adding the new color
      } else {
        setSelectedColors(
          (current) => current.filter((c) => c.colorName !== color.colorName) //if the color is in the array already we are taking it out
        );
      }
    },
    [setSelectedColors] //dependency array
  );
    //this handleSubmit function is checking that our parameters for a new palette are met
  const handleSubmit = useCallback(() => {
    if (!name) {
      alert('Please Name Palette');
    } else if (selectedColors.length < 3) {
      alert('Must Choose at Least 3 Colors');
    } else {
      navigation.navigate('Home', {
        newPalette: { paletteName: name, colors: selectedColors },
      });
    }
  }, [name, navigation, selectedColors]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>Name of your color palette</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      <FlatList
        style={styles.list}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.colorBox}>
            <Text style={styles.switchText}>{item.colorName} </Text>
            <Switch
              style={styles.switch}
              ios_backgroundColor={item.hexCode}
              label={item.colorName}
              value={
                !!selectedColors.find(
                  (color) => color.colorName === item.colorName
                )
              }
              onValueChange={(newValue) => handleUpdate(item, newValue)}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.buttonWrapper} onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  colorBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  list: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    padding: 10,
  },
  buttonWrapper: {
    height: 50,
    marginHorizontal: 10,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  switchText: {},
});
export default AddNewPaletteModal;
