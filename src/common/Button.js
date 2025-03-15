import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const Button = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  type = 'primary',
  customStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.primaryButton,
        disabled && styles.disabledButton,
        customStyle,
      ]}
      activeOpacity={0.7}
      onPress={!loading && !disabled ? onPress : null}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color="#5921CB" />
      ) : (
        <Text
          style={[
            styles.text,
            type === 'secondary' ? styles.secondaryText : styles.primaryText,
            textStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#5921CB',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    borderColor: '#ccc',
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#007AFF',
  },
});

export default Button;
