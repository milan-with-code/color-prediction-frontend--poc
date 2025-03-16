import {StyleSheet} from 'react-native';
import {Fonts} from '../../style/fonts';

export default StyleSheet.create({
  // General Spacing
  marginTop: {
    marginTop: 20,
  },

  // Wallet Section
  walletFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#272932',
    borderRadius: 16,
  },

  itemContainer: {
    borderRadius: 10,
    padding: 10,
  },

  activeItem: {
    backgroundColor: '#8C67F6',
  },

  textContainer: {
    alignItems: 'center',
  },

  itemTitle: {
    color: 'white',
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 14,
  },

  itemTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 12,
  },

  // Game Section
  gameContainer: {
    backgroundColor: '#272932',
    padding: 10,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  winGoText: {
    color: 'white',
    marginTop: 8,
    fontFamily: Fonts.PoppinsRegular,
  },

  ballsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ballMargin: {
    marginTop: 5,
    paddingLeft: 10,
  },

  noPaddingLeft: {
    paddingLeft: 0,
  },

  borderCenterLine: {
    width: 1.5,
    backgroundColor: 'white',
  },

  alignEnd: {
    alignItems: 'flex-end',
  },

  whiteItemTime: {
    color: 'white',
    fontFamily: Fonts.PoppinsMedium,
  },

  timerText: {
    color: 'white',
    fontSize: 19,
    letterSpacing: 9,
    fontFamily: Fonts.PoppinsMedium,
  },

  // Button Container
  buttonContainer: {
    marginTop: 20,
  },

  innerContainer: {
    backgroundColor: '#272932',
    borderRadius: 16,
    position: 'relative',
  },

  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  textBackground: {
    backgroundColor: '#1A1C26',
    marginHorizontal: 10,
  },

  bettingOptionsContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },

  button: {
    borderRadius: 10,
    width: '45%',
    backgroundColor: '#1A1C26',
  },

  tableBtn: {
    borderRadius: 10,
    backgroundColor: '#1A1C26',
  },

  // Table Styles
  container: {
    backgroundColor: '#272932',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  row: {
    flexDirection: 'row',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  header: {
    backgroundColor: '#8C67F6',
    paddingVertical: 12,
  },

  headerText: {
    color: 'white',
    fontSize: 13,
    fontFamily: Fonts.PoppinsSemiBold,
  },

  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Fonts.PoppinsMedium,
    color: 'white',
  },

  colorCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dotText: {
    fontSize: 10,
  },

  highlight: {
    backgroundColor: '#ffcc00',
    color: 'white',
    paddingHorizontal: 6,
    borderRadius: 4,
  },

  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 1,
  },

  symbolText: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.PoppinsRegular,
    marginLeft: 8,
  },

  activeTableButton: {
    backgroundColor: '#8C67F6',
  },

  inactiveTableButton: {
    backgroundColor: '#272932',
  },

  battingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10,
  },
  battingText: {fontSize: 14},

  overlay: {
    borderRadius: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(29, 30, 38, 0.85)',
  },
  centered: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  modalText: {
    fontSize: 40,
    color: '#EBEBEB',
    fontFamily: Fonts.PoppinsSemiBold,
    backgroundColor: '#272932',
    borderRadius: 20,
    paddingHorizontal: 5,
    lineHeight: 60,
  },
  tableMarginBottom: {
    marginBottom: 20,
  },

  // Pagination Style

  paginationContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#272932',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  paginationButton: {
    backgroundColor: '#8C67F6',
    borderRadius: 5,
    padding: 5,
  },
  disabledButton: {
    backgroundColor: '#67696F',
  },
  pageText: {
    fontSize: 14,
    color: 'white',
    opacity: 0.6,
    fontFamily: Fonts.PoppinsMedium,
  },
});
