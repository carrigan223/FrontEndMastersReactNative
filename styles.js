import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },// this is setting our parent safeareaview
    // with a flex of 1 so we can access flex in our children

  container: {
    alignItems: 'center',
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
