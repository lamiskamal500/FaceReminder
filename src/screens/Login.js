import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InputText from '../components/InputText';
import Button from '../components/Button';
import Axios from '../Network/Axios';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {setDefaultUser} from '../store/slices/user';
import {setToken} from '../store/slices/token';
import BackIcon from '../components/BackIcon';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [isCredValid, setIsCredValid] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
  
    const response = await Axios.post('/auth/login/', {email, password});

    if (response.status === 200) {
      dispatch(setDefaultUser(response.data.account));
      dispatch(setToken(response.data.token));
      Axios.defaults.headers.common[
        'Authorization'
      ] = `Token ${response.data.token}`;
      setemail('');
      setPassword('');
      navigation.navigate('HomePage');
      setDisable(false);
      setLoading(false);
    } else {
      // console.log(response);
      console.log(error)
      setError(response.data.error);
      setDisable(false);
      setLoading(false);
    }

    console.log(response);
    // console.log("token" , response.data.token);
  };
  useEffect(() => {
    console.log('isCredValid', isCredValid);
    if (!isCredValid) {
      setDisable(true);
    } else setDisable(false);
    // return () => {
    //   setemail('');
    //   setPassword('');
    // };
  }, [isCredValid]);
  // useEffect(() => {
  //   return () => {
  //     setemail('');
  //     setPassword('');
  //   };
  // }, []);

  const onChecking = () => {
    if (email === '' && password === '') {
      setIsCredValid(false);
    } else {
      setIsCredValid(true);
    }
  };

  return (
    <ScrollView style={styles.wholeScreen}>
      <View style={styles.LoginScreen}>
      <BackIcon/>
        <View>
          <Text style={styles.WelcomeText}>
            Welcome back!
          </Text>
          <Text style={styles.WelcomeText2}>Glad to see you again.</Text>
        </View>

        <InputText
          value={email}
          onBlur={onChecking}
          onChangeText={value => setemail(value)}
          DefaultText="Email Address"
          Type="email-address"
        />

        <InputText
          value={password}
          onBlur={onChecking}
          onChangeText={value => setPassword(value)}
          DefaultText="Password"
          secureTextEntry={showPassword}
          style={styles.passwordInput}>
          <TouchableOpacity
            onPress={() => setshowPassword(!showPassword)}
            style={styles.eye}>
            <Image
              style={styles.eyesImage}
              source={
                showPassword
                  ? require('../assets/eye-solid.png')
                  : require('../assets/eye-slash-solid.png')
              }
            />
          </TouchableOpacity>
        </InputText>

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
          <Text style={styles.DontHaveAccountText}>Dont have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.RegisterNowText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wholeScreen: {
    backgroundColor: '#FFFFFF',
  },
  LoginScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  WelcomeText: {
    color: '#1E232C',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
    marginTop: 15,
    marginRight: 112,
  },
  ForgetText: {
    color: '#6A707C',
    fontWeight: 'SemiBold',
    fontSize: 14,
    fontFamily: 'Urbanist',
    textAlign: 'right',
  },
  DontHaveAccountfull: {
    color: '#1E232C',
    marginTop: 220,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  DontHaveAccountText: {
    color: '#1E232C',
  },
  RegisterNowText: {
    color: '#35C2C1',
  },
  RegisterButton: {
    marginTop: 40,
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
  eyesImage: {
    height: 20,
    width: 25,
  },
  eye: {
    height: '100%',
    top: '35%',
    position: 'absolute',
    // transform: 'translateY(-50%)',
    // translateY: '-50%',
    right: '5%',
  },
  WelcomeText2:{
    color: '#1E232C',
    fontSize: 16,
    fontFamily: 'Urbanist',
    marginBottom:25
  },
  passwordInput:{
    bottom:45,
    right:230,
  }
});

export default Login;

