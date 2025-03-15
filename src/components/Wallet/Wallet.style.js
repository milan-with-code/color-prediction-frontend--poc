import {StyleSheet} from 'react-native';
import {Fonts} from '../../style/fonts';
import {Colors} from '../../style/colors';

export default StyleSheet.create({
  balanceCard: {
    backgroundColor: '#272932',
    borderRadius: 20,
    marginTop: 16,
    padding: 16,
  },
  balanceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#7F7F7F',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
  balanceAmount: {
    color: 'white',
    fontFamily: Fonts.PoppinsBold,
    fontSize: 32,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: Colors[950],
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    paddingTop: 4,
    textAlign: 'center',
  },
});
