import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../../style/fonts';
import WalletScreenCardSection from '../../components/Wallet/WalletScreenCardSection';

const WalletScreen = ({navigation}) => {
  const goBackFunction = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity activeOpacity={0.7} onPress={goBackFunction}>
              <Ionicons name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.placeholder}>Wallet</Text>
          </View>
          <WalletScreenCardSection />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C26',
  },
  header: {
    paddingTop: StatusBar.currentHeight + 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 19,
    fontFamily: Fonts.PoppinsMedium,
  },
  placeholder: {
    color: 'transparent',
  },
});

export default WalletScreen;
