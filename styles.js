import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
    height: 40,
    width: 40,
    marginRight: 10,
  },
  screenBack: {
    backgroundColor: 'white',
  },
  addButton: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 23,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default styles;
