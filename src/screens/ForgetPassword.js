import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import BackIcon from '../components/BackIcon';
import InputText from '../components/InputText';
import Axios from '../Network/Axios';

const ForgetPassword = () => {
  // const [text, setText] = useState('');
  const [email, setemail] = useState('');
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    onPress;
  }, []);
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    try {
      const response = await Axios.post('/auth/forget-password/', {email});
      console.log(response);
      console.log(email);
      if (response.status === 200) {
        // Display a success message to the user
        Alert.alert('Success', 'Password reset link sent to your email.');
        setDisable(false);
        setLoading(false);
        // navigation.navigate('CreateNewPassword');
      } else {
        // Display an error message to the user
        Alert.alert('Error', 'Failed to send password reset email.');
        setDisable(false);
        setLoading(false);
      }
    } catch (error) {
      // Handle errors
      console.error(error);
      // Display an error message to the user
      Alert.alert('Error', 'Failed to send password reset email.');
    }
  };
  return (
    <View style={styles.ForgetPasswordScreen}>
      <BackIcon />
      <View style={{width: '100%'}}>
        <Text style={styles.ForgetText}>Forget Password?</Text>
      </View>
      <View>
        <Text style={styles.ForgetBigText}>
          Please enter the email address linked with your account.
        </Text>
      </View>
      <InputText
        value={email}
        DefaultText="Enter your email"
        style={styles.emailInput}
        onChangeText={value => setemail(value)}
      />
      <Button
        style={styles.SendMailButton}
        buttonText="Send Mail"
        onPress={onPress}
        disable={disable}
        loading={loading}
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
    fontWeight: 'medium',
    marginHorizontal: 22,
    color: '#6A7281',
    fontSize: 16,
    fontFamily: 'Urbanist',
    marginBottom: 35,
  },
  SendMailButton: {
    marginTop: 30,
  },
  emailInput: {
    right: 200,
  },
});
export default ForgetPassword;
