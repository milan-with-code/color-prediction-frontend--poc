import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../style/fonts';

const Input = ({
  label,
  iconName,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = true,
  keyboardType = 'default',
  inlineStyle,
  inputStyle,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  return (
    <View style={[styles.container, inlineStyle]}>
      <View style={styles.row}>
        {label && <Text style={styles.label}>{label}</Text>}
        {iconName && (
          <Icon name={iconName} size={24} color="#666" style={styles.icon} />
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswordVisible}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
  icon: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F3',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
    color: 'black',
  },
  eyeIcon: {
    padding: 10,
  },
});

export default Input;
