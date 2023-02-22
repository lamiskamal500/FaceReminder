import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {defaultUser} from '../store/slices/user';
import {defaultToken} from '../store/slices/token';
import {setDefaultUser} from '../store/slices/user';
import {setToken} from '../store/slices/token';
import Button from '../components/Button';
import Axios from '../Network/Axios';
import  {useCallback} from 'react';
import {Linking} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const HomePage = () => {
  const navigation = useNavigation();
  const user = useSelector(defaultUser);
  const token = useSelector(defaultToken);
  const dispatch = useDispatch();
  console.log('user', user);
  useEffect(() => {
    console.log('token', token);
    // console.log("axios",Axios.defaults.headers.common["Authorization"])
  }, [token]);

  // const devices = useCameraDevices();
  // const device = devices.back;
  // const requestCameraPermission = useCallback(async () => {
  //   const permissin = await Camera.requestCameraPermission();
  //   navigation.navigate('CameraScreen');

  //   if (permissin === 'denied') await Linking.openSettings();
  // }, []);

  const onPress = async () => {
    const response = await Axios.get('/profiles/');
    if (response.status === 200) {
      dispatch(
        setDefaultUser(
          response.data
        ),
      );
      dispatch(setToken(response.data.token));
      navigation.navigate('StaticProfile');
    }
    console.log('response', response);
  };
  return (
    <View style={styles.HomePageMain}>
      <View style={styles.Image}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('../assets/menu.png')} style={styles.Menu} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '90%'}} onPress={onPress}>
          <Image
            source= {user.image? user.image : require('../assets/User2.png')}
            style={styles.User2}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '85%'}}></View>
      <View style={{width: '100%'}}>
        <Text style={styles.HiText}> Hi {user ? user.email : 'Jessia'} </Text>
      </View>
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Mobile Camera"
        onPress={() => navigation.navigate('CameraScreen')}
      />
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="External Camera"
      />
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Local Image"
        onPress={() => navigation.navigate('UploadImage')}
      />
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
    marginTop: 60,
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
    width: 20,
    height: 20,
    marginTop: 30,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginLeft: 60,
  },
  User2: {
    width: 44,
    height: 44,
    marginTop: 18,
    // // alignSelf:'flex-start',
    marginLeft: 230,
    borderRadius: 30,
  },
  Image: {
    // display:"flex",
    flexDirection: 'row',
  },
});
export default HomePage;
