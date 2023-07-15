import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setDefaultUser} from '../store/slices/user';
import Axios from '../Network/Axios';
import {launchImageLibrary} from 'react-native-image-picker';
import BackIcon from '../components/BackIcon';
const EditProfile = () => {
  const [disable, setDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fullname, setfullname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [image, setImage] = React.useState('');
  const [link, setLink] = React.useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const obj = {}
    if(fullname)
    Object.assign(obj,{fullname})
    if(phone)
    Object.assign(obj,{phone})
    if(address)
    Object.assign(obj,{address})
    if(image)
    Object.assign(obj,{image})
    const response = await Axios.patch('/profiles/', obj);
    if (response.status === 200) {
      dispatch(setDefaultUser(response.data));
      setDisable(false);
      setLoading(false);
      navigation.navigate('StaticProfile');
    }
    console.log('response:', response);
  };
  const handleImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true
    };
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].base64);
    setLink(result.assets[0].uri)
    console.log('image', image);
  };
  useEffect(() => {
    console.log('image', image);
  }, []);
  return (
    <View style={styles.editProfileScreen}>
     <BackIcon style={styles.back} />

      <Text style={styles.editProfileTitle}>Edit Profile</Text>
      <View style={styles.ProfilePhoto}>
        {
          <TouchableOpacity
            onPress={() => {
              console.log('kkkkkk');
              handleImage();
            }}
            style={styles.ProfilePhoto}>
            <View style={styles.iconContainer}><Image source={require('../assets/camera.png')} style={styles.icon}/></View>
            <Image
              style={styles.imageStyle}
              source={
                link ? {uri: link} : require('../assets/defaultPhoto.png')
              }
              alt="avatar"
            />
          </TouchableOpacity>
        }
      </View>
      <InputText value={fullname} onChangeText={text => setfullname(text)}>
        <Text style={styles.inputTitle}>Full Name</Text>
      </InputText>
      <InputText value={phone} onChangeText={text => setPhone(text)}>
        <Text style={styles.inputTitle}>Phone Number</Text>
      </InputText>
      <InputText value={address} onChangeText={text => setAddress(text)}>
        <Text style={styles.inputTitle}>Address</Text>
      </InputText>
      <Button
        buttonText="Submit"
        onPress={onPress}
        disable={disable}
        loading={loading}
        backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputTitle: {
    color: '#757575',
    height: '100%',
    top: '5%',
    position: 'absolute',
    paddingLeft: 18,
    fontSize: 11,
  },
  editProfileScreen: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Urbanist',
    height: '100%',
  },
  editProfileTitle: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  uploadButton: {
    width: 150,
    paddingVertical: 17,
  },
  buttonText: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  ProfilePhoto: {
    width: 130,
    height: 130,
  },
  imageStyle: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 100,
    position: 'relative',
  },
  icon:{
    width:25,
    height:25,
  },
  iconContainer:{
    position:'absolute',
    bottom:0,
    right:0,
    backgroundColor:'white',
    padding:5,
    borderRadius:100,
    resizeMode:'contain',
    zIndex:10
  },back: {
    marginLeft: 15,
  },
});
export default EditProfile;
