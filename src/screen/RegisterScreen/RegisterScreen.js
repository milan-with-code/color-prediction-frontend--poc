import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Layout from '../../common/Layout';
import SmallLogo from '../../assets/svg/SmallLogo';
import Input from '../../common/Input';
import CommonCheckbox from '../../common/Checkbox';
import Button from '../../common/Button';
import CountrySelectWithNumberInput from '../../common/CountrySelectWithNumberInput ';
import styles from './RegisterScreen.style';

const RegisterScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Layout>
      <SmallLogo />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>
          Enter your phone number and email to log in.
        </Text>
      </View>

      <View>
        <CountrySelectWithNumberInput />

        <View style={styles.verificationContainer}>
          <Text style={styles.inputLabel}>Verification Code</Text>
          <View style={styles.verificationRow}>
            <Input
              placeholder="Please enter the confirmation code"
              inputStyle={styles.inputText}
              inlineStyle={styles.flexGrow}
              keyboardType="numeric"
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Input
          placeholder="Set Password"
          label="Set Password"
          secureTextEntry
        />
        <Input
          placeholder="Confirm Password"
          label="Confirm Password"
          secureTextEntry
          inlineStyle={styles.marginVertical}
        />
        <Input
          placeholder="Please enter the invitation code"
          label="Invite code"
          keyboardType="default"
        />
      </View>

      <CommonCheckbox
        checkBoxStyle={styles.checkbox}
        label="I have read and agree Privacy Agreement"
        checked={isChecked}
        onChange={setIsChecked}
      />

      <View style={styles.footer}>
        <Button title="Register" />
        <Button
          title="I have an account Login"
          customStyle={styles.loginButton}
        />
      </View>
    </Layout>
  );
};

export default RegisterScreen;
