import {StyleSheet} from 'react-native';
import {Fonts} from '../../style/fonts';

export default StyleSheet.create({
  headerContainer: {
    paddingVertical: 32,
  },
  title: {
    fontFamily: Fonts.PoppinsBold,
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 12,
  },
  verificationContainer: {
    marginVertical: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
  verificationRow: {
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 14,
  },
  flexGrow: {
    flex: 1,
  },
  sendButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontFamily: Fonts.PoppinsMedium,
  },
  marginVertical: {
    marginVertical: 16,
  },
  checkbox: {
    marginTop: 16,
  },
  footer: {
    width: '100%',
    marginTop: 15,
  },
  loginButton: {
    marginVertical: 10,
  },
});
