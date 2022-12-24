import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import InputText from '../components/InputText';

const ForgetPassword = () => {
  return (
    <View style={styles.createPasswordScreen}>
      <BackIcon />
      <View style={{width: '86%'}}>
        <Text style={styles.createPasswordMessage}>Create new password</Text>
      </View>
      <Text style={styles.uniquePassword}>
        Your new password must be unique from those previously used.
      </Text>
      <InputText DefaultText="New Password" />
      <InputText DefaultText="Confirm Password" />
      <Button buttonText="Reset Password" style={styles.resetButton} />
    </View>
  );
};
const styles = StyleSheet.create({
  createPasswordScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Urbanist',
    height: '100%',
  },
  createPasswordMessage: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  uniquePassword: {
    color: '#8391A1',
    marginHorizontal: 10,
    fontSize: 15,
    marginBottom: 20,
  },
  resetButton: {
    marginVertical: 30,
  },
});
export default ForgetPassword;
