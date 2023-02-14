import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InputText from '../components/InputText';
import Button from '../components/Button';
import Axios from '../Network/Axios';
import { ScrollView } from 'react-native-gesture-handler';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [isCredValid, setIsCredValid] = useState(undefined);
  const [disable, setDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation();
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const response = await Axios.post('/login/', {email, password});
    if(response.status = 200){
      navigation.navigate('HomePage');
      setDisable(false);
      setLoading(false);
    }
    console.log(response);
  };

return (
  <ScrollView>
  <View style={styles.LoginScreen}>
    <View>
      <Text style={styles.WelcomeText}>
        Welcome back! Glad to see you, Again!
      </Text>
    </View>

    <InputText
      value={email}
      onChangeText={value => setemail(value)}
      DefaultText="Enter your email"
      Type="email-address"
    />

    <InputText
      value={password}
      onChangeText={value => setPassword(value)}
      DefaultText="Enter your password"
      Type="password"
    />

    <TouchableOpacity
      style={{width: '90%'}}
      onPress={() => navigation.navigate('ForgetPassword')}>
      <View>
        <Text style={styles.ForgetText}>Forget Password?</Text>
      </View>
    </TouchableOpacity>
      {isCredValid ? (
        <View style={styles.WrongMessageBorder}>
          <Image source={require('../assets/XIcon.png')} style={styles.XIcon} />
          <Text style={styles.WrongMessage}>
            Something went wrong, Please enter a valid credentials{' '}
          </Text>
        </View>
      ): <Text> </Text>}
      <Button
        style={styles.RegisterButton}
        disable={disable}
        buttonText="Login"
        onPress={onPress}
        loading={loading}
        backgroundColor={{backgroundColor: loading ? '#8391A1' : '#1E232C'}}
      />

      <View style={styles.DontHaveAccountfull}>
        <Text style={styles.DontHaveAccountText}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.RegisterNowText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  LoginScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  WelcomeText: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 30,
  },
  ForgetText: {
    color: '#6A707C',
    fontWeight: 'SemiBold',
    fontSize: 14,
    fontFamily: 'Urbanist',
    textAlign: 'right',
  },
  DontHaveAccountfull: {
    marginTop: 220,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom:11
  },
  DontHaveAccountText: {
    color: '#1E232C',
  },
  RegisterNowText: {
    color: '#35C2C1',
  },
  RegisterButton: {
    marginTop: 30,
  },
  WrongMessage: {
    color: '#ff0000',
    fontSize: 15,
    fontWeight: 'semibold',
    fontFamily: 'Urbanist',
    marginLeft: 50,
  },
  XIcon: {
    width: 25,
    height: 25,
    marginBottom: -28,
    marginLeft: 14,
  },
  WrongMessageBorder: {
    width: '95%',
    marginBottom: 15,
    marginTop: 15,
  },
});

export default Login;

