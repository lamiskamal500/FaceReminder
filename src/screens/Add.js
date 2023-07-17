import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import {useSelector, useDispatch} from 'react-redux';
import {defaultUser} from '../store/slices/user';
import {defaultNetwork} from '../store/slices/network';
import Button from '../components/Button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Geolocation from 'react-native-geolocation-service';
import Axios from '../Network/Axios';
import InputText from '../components/InputText';
import {PermissionsAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {setDefaultNetwork} from '../store/slices/network';


const Add = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(defaultUser);
  const [isCheckedLocation, setIsCheckedLocation] = useState(false);
  const [location, setLocation] = useState(null);
  const [name, setName] = React.useState('');
  const [relation, setRelation] = React.useState('');
  const [age, setAge] = React.useState('');
  const [biography, setBiography] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone_number, setPhone_number] = React.useState('');
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const network = useSelector(defaultNetwork);

  useEffect(() => {
    console.log('network', network);
  });
  const handleAgeChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');

    if (numericValue !== '') {
      setAge(numericValue);
    }
  }
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const response = await Axios.post('/connections/', {
      image: network.image,
      rep: network.rep,
      name,
      age,
      relation,
      phone_number,
      biography,
      address,
    });
    if (response.status === 200 || 201) {
      dispatch(setDefaultNetwork(response.data));
      navigation.navigate('Network');
      setDisable(false);
      setLoading(false);
    }
    console.log('response:', response);
  };

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message: 'This app needs access to your location.',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         Geolocation.getCurrentPosition(
  //           position => {
  //             const {latitude, longitude} = position.coords;
  //             setLocation({latitude, longitude});
  //           },
  //           error => {
  //             console.log(error.code, error.message);
  //           },
  //           {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //         );
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   requestLocationPermission();

  //   if (isCheckedLocation) {
  //     console.log('latitude :', location?.latitude);
  //     console.log('longitude :', location?.longitude);
  //   }
  // });
  return (
    <ScrollView style={styles.wholeScreen}>
    <View style={styles.StaticProfileScreen}>
      {/* <View style={styles.Images}> */}
      <View style={{display: 'flex'}}>
        <BackIcon />
        <Text style={styles.ProfileText}>Add new person</Text>
      </View>
      {/* <View style={styles.imageNetwork}>
        <TouchableOpacity
          onPress={() => {
            console.log('kkkkkk');
            handleImage();
          }}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/camera.png')}
              style={styles.icon}
            />
          </View>
          <Image
            style={styles.imageStyle}
            source={link ? {uri: link} : require('../assets/defaultPhoto.png')}
            alt="avatar"
          />
        </TouchableOpacity>
      </View> */}
      {/* </View> */}
      <View style={styles.imageNetwork}>
      <Image
            style={styles.imageStyle}
            source={network.image ? { uri: network.image } : {uri: 'https://face-reminder.online/media/ESP32CAMCap.jpg?timestamp=16263625820936'}}
            alt="avatar"
        />
        </View>
      <View style={styles.infoBox}>
        <InputText
          DefaultText="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.nameInput}
        />
        <InputText
          DefaultText="Relation"
          value={relation}
          onChangeText={text => setRelation(text)}
          style={styles.relationInput}
        />
        <InputText
          DefaultText="Biography"
          value={biography}
          onChangeText={text => setBiography(text)}
          style={styles.biographyInput}
        />
        <InputText
          DefaultText="Age"
          value={age}
          keyboardType="numeric"
          onChangeText={handleAgeChange}
          style={styles.ageInput}
        />
      </View>

      <View style={styles.CheckBox}>
        <BouncyCheckbox
          isChecked={isCheckedLocation}
          onPress={() => setIsCheckedLocation(!isCheckedLocation)}
          text="Add current address via maps"
          fillColor="blue"
        />
      </View>
      
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Save"
        loading={loading}
        backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
        onPress={onPress}
      />
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  StaticProfileScreen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    height: '100%',
    // alignItems:'center',
    // justifyContent:'center'
  },
  wholeScreen: {
    backgroundColor: '#FFFFFF',
  },
  // Images: {
  //   display: 'flex',
  //   width: '90%',
  // },
  ShareIcon: {
    width: 14,
    height: 16,
    marginTop: 30,
    marginLeft: 130,
  },
  User2: {
    width: 160,
    height: 160,
    marginTop: 10,
    borderRadius: 200,
    marginBottom: 5,
  },
  ProfileText: {
    color: '#1D1838',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: 30,
  },
  UserText: {
    color: '#1D1838',
    fontSize: 27,
    fontWeight: 'semibold',
  },
  me: {
    color: '#898794',
    fontSize: 20,
    fontWeight: 'semibold',
    marginTop: -9,
  },
  EmailText: {
    color: '#1D1838',
    fontSize: 23,
    fontWeight: 'semibold',
    textAlign: 'left',
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  info: {
    color: '#898794',
    fontSize: 17,
    top: '30%',
    paddingLeft: 12,
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBox: {
    marginLeft: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  Button: {
    marginLeft: 15,
    marginTop: 18,
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  inputs: {
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 25,
  },
  imageStyle: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 100,
    position: 'relative',
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 100,
    resizeMode: 'contain',
    zIndex: 10,
  },
  imageNetwork: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  nameInput: {
    right: 250,
  },
  relationInput: {
    right: 240,
  },
  biographyInput: {
    right: 230,
  },
  ageInput: {
    right: 265,
  },
});
export default Add;
