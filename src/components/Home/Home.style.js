import {StyleSheet} from 'react-native';
import {Fonts} from '../../style/fonts';

export default StyleSheet.create({
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    height: 140,
    position: 'relative',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#272932',
    borderRadius: 16,
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: '#fff',
    fontSize: 13,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  goButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#1A1C26',
  },
  goButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goButtonText: {
    color: '#A5A5A5',
    fontSize: 16,
    fontFamily: Fonts.PoppinsSemiBold,
    marginRight: 10,
  },
});
