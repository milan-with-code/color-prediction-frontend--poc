import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../style/fonts';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from './Button';

const WalletCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>₹0.00</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.refreshButton}>
          <EvilIcons name="refresh" size={30} color="#DCDCDC" />
        </TouchableOpacity>
      </View>

      <View style={styles.walletInfo}>
        <TouchableOpacity activeOpacity={0.7} style={styles.walletIcon}>
          <Entypo name="wallet" size={25} color="#DCDCDC" />
        </TouchableOpacity>
        <Text style={styles.walletText}>Wallet balance</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Withdraw" customStyle={styles.button} />
        <Button title="Deposit" customStyle={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272932',
    padding: 16,
    borderRadius: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    margin: 'auto',
  },
  balanceText: {
    color: 'white',
    fontSize: 20,
    fontFamily: Fonts.PoppinsMedium,
  },
  refreshButton: {
    marginLeft: 20,
  },
  walletInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    margin: 'auto',
  },
  walletIcon: {
    marginRight: 10,
  },
  walletText: {
    color: 'white',
    fontSize: 13,
    fontFamily: Fonts.PoppinsMedium,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    borderRadius: 100,
    width: '45%',
  },
});

export default WalletCard;
