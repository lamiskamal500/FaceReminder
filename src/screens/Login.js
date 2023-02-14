import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InputText from '../components/InputText';
import Button from '../components/Button';
import Axios from '../Network/Axios';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {setDefaultUser} from '../store/slices/user';
// import {setToken, setUser} from '../redux/actions';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [isCredValid, setIsCredValid] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const response = await Axios.post('/login/', {email, password});

    if (response.status === 200) {
      dispatch(setDefaultUser(response.data.account));
      // dispatch(setToken(response.data.token));
      navigation.navigate('HomePage');

      setDisable(false);
      setLoading(false);
    } else {
      console.log(response);
      setError(response.data.error);
      setDisable(false);
      setLoading(false);
    }

    console.log(response);
  };
  useEffect(() => {
    console.log('isCredValid', isCredValid);
    if (!isCredValid) {
      setDisable(true);
    } else setDisable(false);
  }, [isCredValid]);

  const onChecking = () => {
    if (email === '' && password === '') {
      setIsCredValid(false);
    } else {
      setIsCredValid(true);
    }
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
          onBlur={onChecking}
          onChangeText={value => setemail(value)}
          DefaultText="Enter your email"
          Type="email-address"
        />

        <InputText
          value={password}
          onBlur={onChecking}
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
        {error ? (
          <View style={styles.WrongMessageBorder}>
            <Image
              source={require('../assets/XIcon.png')}
              style={styles.XIcon}
            />
            <Text style={styles.WrongMessage}>{error}</Text>
          </View>
        ) : (
          ''
        )}
        <Button
          style={styles.RegisterButton}
          disable={disable}
          buttonText="Login"
          onPress={onPress}
          loading={loading}
          backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
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
    marginBottom: 11,
    display: 'flex',
    flexDirection: 'row',
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
  },
  XIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  WrongMessageBorder: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    // gap: '80px',
  },
});

export default Login;
