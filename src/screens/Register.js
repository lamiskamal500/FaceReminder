import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import InputText from '../components/InputText';
import BackIcon from '../components/BackIcon';

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.registerScreen}>
      <BackIcon/>
      <Text style={styles.registerMessage}>Hello!Register to get started</Text>
      <InputText DefaultText="Email" />
      <InputText DefaultText="Password" />
      <InputText DefaultText="Confirm Password" />
      <Button buttonText="Register" style={styles.registerButton} />
      <View style={styles.haveAccount}>
        <Text style={styles.account}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginNow}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  registerScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  registerMessage: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
    marginTop: 30,
    marginBottom: 30,
  },
  haveAccount: {
    color: '#1E232C',
    marginTop: 85,
    display:"flex",
    flexDirection:'row'
  },
  loginNow: {
    color: '#35C2C1',
  },
  registerButton: {
    marginVertical: 30,
  },
  account: {
    color: 'black',
  },
});

export default Register;
