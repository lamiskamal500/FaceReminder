import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import InputText from '../components/InputText';
import BackIcon from '../components/BackIcon';

const Register = () => {
  const [disable, setDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  function onPress() {
    setDisable(true);
    navigation.navigate('Login');
    setLoading(true);
  }
  return (
    <View style={styles.registerScreen}>
      <BackIcon />
      <Text style={styles.registerMessage}>Hello!Register to get started</Text>
      <InputText DefaultText="Email" />
      <InputText DefaultText="Password" />
      <InputText DefaultText="Confirm Password" />

      <Button
        buttonText="Register"
        disable={disable}
        onPress={onPress}
        style={styles.registerButton}
        styleButton={styles.buttonText}
        loading={loading}
        backgroundColor={{backgroundColor: loading ? '#8391A1' : '#1E232C'}}
      />

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
    fontFamily: 'Urbanist',
    height: '100%',
  },
  registerMessage: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  haveAccount: {
    color: '#1E232C',
    marginTop: 85,
    display: 'flex',
    flexDirection: 'row',
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
  buttonText: {
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Register;
