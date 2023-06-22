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
            // source= {user.image? user.image : require('../assets/User2.png')}
            style={styles.User2}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '85%'}}></View>
      <View style={{width: '100%'}}>
        <Text style={styles.HiText}> Hi {user ? user.email : 'Jessia'} </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')} style={styles.cameraButton}>
      <View style={styles.iconCircle}>
          <Image
            source={require('../assets/cameraa.png')}
          />
        </View>
      <View>
        <Text style={styles.mobile}>Mobile Camera</Text>
        <Text style={styles.mobileText}>Take a photo for a person in front of you.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cameraButton}>
      <View style={styles.iconCircle}>
          <Image
            source={require('../assets/mobile.png')}
          />
        </View>
      <View>
        <Text style={styles.mobile}>External Camera</Text>
        <Text style={styles.mobileText}>Make sure to open bluetooth before using{'\n'}your external camera.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('UploadImage')} style={styles.cameraButton}>
      <View style={styles.iconCircle}>
          <Image
            source={require('../assets/Group.png')}
          />
        </View>
      <View>
        <Text style={styles.mobile}>Local Image</Text>
        <Text style={styles.mobileText}>Choose a photo from your mobile photos.</Text>
        </View>
      </TouchableOpacity>
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
  cameraButton:{
    backgroundColor:'#F4F4F4',
    borderRadius:15,
    borderColor:'#DCDCDC',
    borderWidth: 1,
    padding:20,
    flexDirection: 'row',
    marginTop:15,
    marginBottom:15,
    width:330,
   
  },
  mobile:{
    color:'#000001',
    fontSize:20,
    fontWeight:'500',
    marginBottom:3
  },
  mobileText:{
    color:'#000001',
    fontSize:13,
  },
  cameraText:{
    display:'flex'
  },
  iconCircle:{
    backgroundColor:'#FFFFFF',
    width:50,
    height:50,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:15

  }
});
export default HomePage;
