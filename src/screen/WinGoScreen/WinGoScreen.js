import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {goBack} from '../../utils/navigationHelper';
import Layout from '../../common/Layout';
import WalletCard from '../../common/WalletCard';
import {Fonts} from '../../style/fonts';
import WinGoGameSection from '../../components/WinGo/WinGoGameSection';

export default function WinGoScreen({navigation}) {
  return (
    <Layout statusBarStyle="light-content" translucent>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => goBack(navigation)}>
          <MaterialIcons name="keyboard-backspace" color="white" size={28} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>WinGo Screen</Text>
        </View>
      </View>

      <View style={styles.walletMarginTop}>
        <WalletCard />
      </View>

      <View style={styles.walletMarginTop}>
        <WinGoGameSection />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: Fonts.PoppinsSemiBold,
  },
  walletMarginTop: {
    marginTop: 20,
  },
});
