import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Alert
} from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {defaultUser} from '../store/slices/user';
import {defaultToken} from '../store/slices/token';
import {setDefaultUser} from '../store/slices/user';
import {defaultNetwork, setDefaultNetwork} from '../store/slices/network';
import {setToken} from '../store/slices/token';
import Axios from '../Network/Axios';

const HomePage = () => {
  const navigation = useNavigation();
  const user = useSelector(defaultUser);
  const token = useSelector(defaultToken);
  const network = useSelector(defaultNetwork);
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('user', user);
    if (user) {
      onPress();
    } else {
      navigation.navigate('Login');
    }
    console.log('user', user);
  }, []);
  useEffect(() => {
    if (isFocused) {
      console.log("navigation",navigation)
      navigation.closeDrawer();
      if (user) {
        onPress();
      } else {
        navigation.navigate('Login');
      }
      console.log('user', user);
    }
  }, [isFocused]);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (user) {
  //       onPress();
  //     }
  //   }, []),
  // );

  useEffect(() => {
    console.log('token', token);
  }, [token]);

  const onPressMove = () => {
    navigation.toggleDrawer();
  };
  const GetImage = async () => {
    const response = await Axios.get('/preview-image/');
    if (response.status === 200) {
    dispatch(setDefaultNetwork(response.data));
    console.log('response', response);
    navigation.navigate('ExternalCamera');
    setModalVisible(false);
    }
    if (response.status === 404){
      Alert.alert('Error' , 'Image Not Found');
    }
  };
  const onPress = async () => {
    const response = await Axios.get('/profiles/');
    if (response.status === 200) {
      dispatch(setDefaultUser(response.data));
      dispatch(setToken(response.data.token));
    }
    console.log('response', response);

    const responce = await Axios.get('/connections/');
    if (responce.status === 200) {
      dispatch(setDefaultNetwork(responce.data));
    }
    console.log('responce', responce);
  };
  const onPressCamera = () => {
    navigation.navigate('ExternalCamera');
    setModalVisible(false);
  };
  return (
    <View style={styles.HomePageMain}>
      <View style={styles.Image}>
        <TouchableOpacity onPress={onPressMove}>
          <Image source={require('../assets/menu.png')} style={styles.Menu} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '90%'}}
          onPress={() => navigation.navigate('StaticProfile')}>
          <Image
            source={
              user? user.image ? {uri:  `https://face-reminder.online${user.image}`} :
              require('../assets/User2.png')
                : require('../assets/User2.png')
            }
            style={styles.User2}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '85%'}}></View>
      <View style={{width: '100%'}}>
        <Text style={styles.HiText}>
          Hi {user ? (user.fullname ? user.fullname : 'Jessia') : 'Jessia'}{' '}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CameraScreen')}
        style={styles.cameraButton}>
        <View style={styles.iconCircle}>
          <Image source={require('../assets/mobile.png')} />
        </View>
        <View>
          <Text style={styles.mobile}>Mobile Camera</Text>
          <Text style={styles.mobileText}>
            Take a photo for a person in front of you.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.iconCircle}>
          <Image source={require('../assets/cameraa.png')} />
        </View>
        <View>
          <Text style={styles.mobile}>External Camera</Text>
          <Text style={styles.mobileText}>
            Make sure to open WiFi before using{'\n'}your external camera.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('UploadImage')}
        style={styles.cameraButton}>
        <View style={styles.iconCircle}>
          <Image source={require('../assets/Group.png')} />
        </View>
        <View>
          <Text style={styles.mobile}>Local Image</Text>
          <Text style={styles.mobileText}>
            Choose a photo from your mobile photos.
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Image
              source={require('../assets/instruction.png')}
              style={styles.confused}
            />
            <Text style={styles.notRecognized}>Instruction</Text>
            <Text style={styles.notRecognizedText}>
              Please put the face you want to recognize in front of the camera
              after that press the button in your camera.
            </Text>
            <Button
              buttonText="OK"
              style={styles.addButton}
              onPress={GetImage}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  HomePageMain: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  HiText: {
    color: '#1E232C',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    // alignItems:'flex-start'
  },
  Button: {
    marginTop: 60,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  Menu: {
    width: 30,
    height: 30,
    marginTop: 45,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginLeft: 63,
  },
  User2: {
    width: 55,
    height: 55,
    marginTop: 20,
    marginBottom: 15,
    bottom: '-8%',
    // // alignSelf:'flex-start',
    marginLeft: 220,
    borderRadius: 100,
  },
  Image: {
    // display:"flex",
    flexDirection: 'row',
  },
  cameraButton: {
    backgroundColor: '#F4F4F4',
    borderRadius: 15,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    padding: 20,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    width: 330,
  },
  mobile: {
    color: '#000001',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 3,
  },
  mobileText: {
    color: '#000001',
    fontSize: 12,
  },
  cameraText: {
    display: 'flex',
  },
  iconCircle: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modal: {
    backgroundColor: '#ffffff',
    margin: 42,
    marginTop: 140,
    padding: 12,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flex: 0.8,
  },
  confused: {
    width: 100,
    height: 100,
    marginTop: 45,
    marginBottom: 20,
  },
  notRecognized: {
    color: '#1E232C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notRecognizedText: {
    color: '#696F76',
    marginBottom: 35,
    width: '80%',
    textAlign: 'center',
  },
  addButton: {
    width: 200,
  },
});
export default HomePage;
