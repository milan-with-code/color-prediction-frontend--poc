import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Fonts} from '../style/fonts';

const CountrySelectWithNumberInput = ({
  label = 'Phone Number',
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <View style={styles.codeBox}>
          <Text style={styles.countryCode}>+91</Text>
        </View>
        <TextInput
          placeholder="Please enter the phone number"
          label="Phone number"
          keyboardType="phone-pad"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  codeBox: {
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    backgroundColor: 'white',
  },
  countryCode: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
    color: 'black',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
});

export default CountrySelectWithNumberInput;
