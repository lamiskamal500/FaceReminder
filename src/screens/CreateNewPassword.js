import React from 'react';
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

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password, setconfirm_password] = useState('');

  const onPress = async () => {
    const response = await Axios.post('/auth/set-password/{token}', {
      password,
      confirm_password,
    });
    console.log(response);
    // setModalVisible(!modalVisible)
  };
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
      />
      <InputText
        DefaultText="Confirm Password"
        value={confirm_password}
        onChangeText={value => setconfirm_password(value)}
      />
      <Button
        buttonText="Reset Password"
        style={styles.resetButton}
        onPress={onPress}
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
});
export default CreateNewPassword;
