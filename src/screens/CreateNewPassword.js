import React, { useState,useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import BackIcon from '../components/BackIcon';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Axios from '../Network/Axios';


const CreateNewPassword = () => {
  const [disable, setDisable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [checkValidPassword, setCheckValidPassword] = React.useState(false);
  const [checkValidConfirmPassword, setCheckValidConfirmPassword] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const handlePassword = text => {
    if (password) {
      setCheckValidPassword(true);
    } else {
      setCheckValidPassword(false);
    }
  };
  const handleConfirmPassword = text => {
    if (confirm_password === password) {
      setCheckValidConfirmPassword(true);
      console.log(true)
    } else {
      setCheckValidConfirmPassword(false);
      console.log(false)
    }
  };
  
  const onPress = async () => {
    const response = await Axios.post('/auth/set-password/{token}', {
      password,
      confirm_password,
    });
    console.log(response);
    // setModalVisible(!modalVisible)
  };
  useEffect(() => {
    if (checkValidPassword && checkValidConfirmPassword) {
      setDisable(false);}
      else {
        setDisable(true)
      }
  }, [checkValidPassword, checkValidConfirmPassword]);
  return (
    <View style={styles.createPasswordScreen}>
      <BackIcon />
      <View style={{width: '86%'}}>
        <Text style={styles.createPasswordMessage}>Create new password</Text>
      </View>
      <Text style={styles.uniquePassword}>
        Your new password must be unique from those previously used.
      </Text>
      <InputText
        DefaultText="New Password"
        value={password}
        onChangeText={value => setPassword(value)}
        onBlur={()=>{
            handlePassword()
          }}
      />
      <InputText
        DefaultText="Confirm Password"
        value={confirm_password}
        onChangeText={value => setconfirm_password(value)}
        onBlur={()=>{
            handleConfirmPassword()
          }}
      />
      {checkValidConfirmPassword ? <Text style={passwordFaild}>Password must match</Text> : ''}
      <Button
        buttonText="Reset Password"
        style={styles.resetButton}
        onPress={onPress}
        disable={disable}
        loading={loading}
        backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Image
              source={require('../assets/Successmark.png')}
              style={styles.successmark}
            />
            <Text style={styles.passwordChanged}>Password Changed!</Text>
            <Text style={styles.passwordText}>
              Your password has been changed successfully
            </Text>
            <Button
              buttonText="Back to Login"
              style={styles.backButton}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modal: {
    backgroundColor: '#ffffff',
    margin: 40,
    marginTop: 150,
    padding: 25,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flex: 0.8,
  },
  successmark: {
    width: 80,
    height: 80,
    marginTop: 45,
    marginBottom: 20,
  },
  passwordChanged: {
    color: '#1E232C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  backButton: {
    width: 230,
  },
  passwordText: {
    color: '#8391A1',
    marginBottom: 35,
    width: '65%',
  },
  passwordFaild: {
    color: 'red',
    fontSize: 15,
  },
});
export default CreateNewPassword;
