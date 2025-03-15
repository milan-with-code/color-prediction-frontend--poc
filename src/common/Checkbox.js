import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../style/fonts';

const CommonCheckbox = ({
  label,
  checked,
  onChange,
  size = 24,
  color = '#1D61E7',
  checkBoxStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, checkBoxStyle]}
      activeOpacity={0.7}
      onPress={() => onChange(!checked)}>
      <Icon
        name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
        size={size}
        color={color}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 6,
    fontSize: 14,
    color: '#1A1C1E',
    fontFamily: Fonts.PoppinsMedium,
  },
});

export default CommonCheckbox;
