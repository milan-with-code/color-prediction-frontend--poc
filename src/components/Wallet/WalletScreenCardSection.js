import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Wallet.style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WalletScreenCardSection = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const OptionButton = ({icon, label}) => (
    <TouchableOpacity style={[styles.button]}>
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.balanceCard}>
      <View style={styles.balanceContainer}>
        <Ionicons name="wallet-outline" size={30} color="white" />
        <Text style={styles.balanceAmount}>$14,235.34</Text>
        <Text style={styles.balanceLabel}>Total balance</Text>
      </View>
    </View>
  );
};

export default WalletScreenCardSection;
