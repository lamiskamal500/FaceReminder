import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import InputText from '../components/InputText';
import BackIcon from '../components/BackIcon';
import Axios from '../Network/Axios';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {setDefaultUser} from '../store/slices/user';
import {setToken} from '../store/slices/token';

const Register = () => {
  const [disable, setDisable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [fullname, setfullname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [confirm_password, setconfirm_password] = React.useState('');
  const [checkValidEmail, setCheckValidEmail] = React.useState(false);
  const [checkValidName, setCheckValidName] = React.useState(false);
  const [checkValidPassword, setCheckValidPassword] = React.useState(false);
  const [checkValidConfirmPassword, setCheckValidConfirmPassword] =
    React.useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [error, setError] = React.useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleEmail = () => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (re.test(email) || regex.test(email)) {
      setCheckValidEmail(true);
    } else {
      setCheckValidEmail(false);
    }
  };
  const handleName = text => {
    if (fullname) {
      console.log('fullname', true);
      setCheckValidName(true);
    } else {
      setCheckValidName(false);
    }
  };
  const handlePassword = text => {
    if (password) {
      setCheckValidPassword(true);
    } else {
      setCheckValidPassword(false);
    }
  };
  const handleConfirmPassword = text => {
    console.log(confirm_password, password);
    if (confirm_password === password) {
      setCheckValidConfirmPassword(true);
      console.log(true);
    } else {
      setCheckValidConfirmPassword(false);
      console.log(false);
    }
  };
  useEffect(() => {
    console.log('isFirstRender', isFirstRender);
    if (
      checkValidName &&
      checkValidEmail &&
      checkValidPassword &&
      checkValidConfirmPassword &&
      !isFirstRender
    ) {
      setDisable(false);
    }
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [
    checkValidName,
    checkValidEmail,
    checkValidPassword,
    checkValidConfirmPassword,
  ]);

  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const response = await Axios.post('/auth/register/', {
      fullname,
      email,
      password,
      confirm_password,
    });
    if (response.status === 200 || response.status === 201) {
      dispatch(setDefaultUser(response.data.account));
      dispatch(setToken(response.data.token));
      Axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
      setDisable(false);
      setLoading(false);
      navigation.navigate('HomePage');
    } else {
      setError(response.data.message);
      setDisable(false);
      setLoading(false);
      console.log('error', error);
    }
    console.log('response', response);
  };

  return (
    <ScrollView style={styles.wholeScreen}>
      <View style={styles.registerScreen}>
        <BackIcon />
        <Text style={styles.registerMessage}>
          Sign Up
        </Text>
        <InputText
          DefaultText="Full Name"
          style={styles.nameInput}
          onChangeText={text => setfullname(text)}
          onBlur={() => {
            setNameTouched(true);
            handleName();
          }}
        />
        {!checkValidName && nameTouched ? (
          <Text style={styles.emailFailed}>This field is required</Text>
        ) : (
          ''
        )}
        <InputText
          DefaultText="Email Address"
          style={styles.emailInput}
          onChangeText={text => setemail(text)}
          value={email}
          onBlur={() => {
            setEmailTouched(true);
            handleEmail();
          }}
        />
        {!checkValidEmail && emailTouched ? (
          <Text style={styles.emailFailed}>Wrong Email Format</Text>
        ) : (
          ''
        )}
        <InputText
          DefaultText="Password"
          style={styles.passwordInput}
          onChangeText={text => setpassword(text)}
          onBlur={() => {
            setPasswordTouched(true);
            handlePassword();
          }}
          secureTextEntry={true}
        />
        {!checkValidPassword && passwordTouched ? (
          <Text style={styles.emailFailed}>This field is required</Text>
        ) : (
          ''
        )}
        <InputText
          DefaultText="Confirm Password"
          style={styles.confirmInput}
          onChangeText={text => setconfirm_password(text)}
          onBlur={() => {
            setConfirmPasswordTouched(true);
            handleConfirmPassword();
          }}
          secureTextEntry={true}
        />
        {!checkValidConfirmPassword && confirmPasswordTouched ? (
          <Text style={styles.emailFailed}>Password must match</Text>
        ) : (
          ''
        )}
        {error ? <Text style={styles.emailFailed}>{error}</Text> : ''}
        <Button
          buttonText="Sign Up"
          disable={disable}
          onPress={onPress}
          style={styles.registerButton}
          styleButton={styles.buttonText}
          loading={loading}
          backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
        />

        <View style={styles.haveAccount}>
          <Text style={styles.account}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginNow}>Login</Text>
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
  registerScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Urbanist',
    height: '100%',
  },
  registerMessage: {
    color: '#1E232C',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
    // position:'absolute',
    right:95,

  },
  haveAccount: {
    color: '#1E232C',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  loginNow: {
    color: '#35C2C1',
  },
  registerButton: {
    marginVertical: 18,
  },
  account: {
    color: 'black',
  },
  buttonText: {
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  emailFailed: {
    color: 'red',
    fontSize: 15,
  },
  nameInput:{
    right:230,
  },
  emailInput:{
    right:205,
  },
  passwordInput:{
    right:230,
  },
  confirmInput:{
    right:180,
  }
});

export default Register;
