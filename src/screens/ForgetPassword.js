import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import BackIcon from '../components/BackIcon';
import InputText from '../components/InputText';
import Axios from '../Network/Axios';

const ForgetPassword = () => {
  // const [text, setText] = useState('');
  const [email , setemail] = useState('')
  const navigation = useNavigation();

  const onPress = async () => {
    const response = await Axios.post('/auth/forget-password/', {email});
    console.log(response);
  };

  return (
    <View style={styles.ForgetPasswordScreen}>
      <BackIcon />
      <View style={{width: '100%'}}>
        <Text style={styles.ForgetText}>Forget Password?</Text>
      </View>
      <View style={{width: '100%'}}>
        <Text style={styles.ForgetBigText}>
          {' '}
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
      </View>
      <InputText
        value={email}
        DefaultText="Enter your email"
        onChangeText={value => setemail(value)}
      />
      <Button
        style={styles.SendMailButton}
        buttonText="Send Mail"
        onPress={onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ForgetPasswordScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  ForgetText: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 30,
    alignItems: 'flex-start',
  },
  ForgetBigText: {
    color: '#8391A1',
    fontWeight: 'medium',
    fontSize: 16,
    fontFamily: 'Urbanist',
    marginBottom: 20,
    marginHorizontal: 22,
  },
  SendMailButton: {
    marginTop: 30,
  },
});
export default ForgetPassword;
