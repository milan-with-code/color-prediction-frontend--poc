import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../../common/Layout';
import SmallLogo from '../../assets/svg/SmallLogo';
import RStyle from '../RegisterScreen/RegisterScreen.style';
import Input from '../../common/Input';
import Button from '../../common/Button';
import styles from './LoginScreen.style';
import CountrySelectWithNumberInput from '../../common/CountrySelectWithNumberInput ';

const LoginScreen = () => {
  return (
    <Layout>
      <SmallLogo />
      <View style={RStyle.headerContainer}>
        <Text style={RStyle.title}>Sign in to your Account</Text>
        <Text style={RStyle.subtitle}>
          Enter your email and password to log in
        </Text>
      </View>
      <View>
        <CountrySelectWithNumberInput />
        <Input
          placeholder="Enter your password"
          label="Password"
          keyboardType="password"
          inlineStyle={RStyle.marginVertical}
          secureTextEntry
        />
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>
      <Button title="Log In" customStyle={RStyle.marginVertical} />
      <Button title="Register" />
    </Layout>
  );
};

export default LoginScreen;
