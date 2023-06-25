import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import {useSelector} from 'react-redux';
import {defaultUser} from '../store/slices/user';
import Button from '../components/Button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Geolocation from 'react-native-geolocation-service';
import Axios from '../Network/Axios';
import InputText from '../components/InputText';
import {PermissionsAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const Add = () => {
  const navigation = useNavigation();
  const user = useSelector(defaultUser);
  const [isCheckedLocation, setIsCheckedLocation] = useState(false);
  const [location, setLocation] = useState(null);
  const [name, setName] = React.useState('');
  const [relation, setRelation] = React.useState('');
  const [age, setAge] = React.useState('');
  const [biography, setBiography] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [image, setImage] = React.useState('');
  const [link, setLink] = React.useState('');

  const onPress = async () => {
    const response = await Axios.post('/connections/', {
      image,
      name,
      relation,
      age,
      biography,
      address,
    });
    if (response.status === 200) {
      navigation.navigate('Network');
    }
    console.log('response:', response);
  };
  const handleImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].base64);
    setLink(result.assets[0].uri);
    console.log('image', image);
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
    <View style={styles.StaticProfileScreen}>
      {/* <View style={styles.Images}> */}
      <View style={{display: 'flex'}}>
        <BackIcon />
        <Text style={styles.ProfileText}>Add new person</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          source={
            user.image ? user.image : require('../assets/RecognizeDetails.png')
          }
          style={styles.User2}
        />
        {/* <Text style={styles.UserText}>
          {user.fullname ? user.fullname : 'Jessia'}
        </Text>
        <Text style={styles.me}>me</Text> */}
      </View>

      {/* <Text style={styles.EmailText}>Email</Text> */}

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          Name
        </Text>
      </View>
      {/* </View> */}
      <View style={styles.infoBox}>
        <Text style={styles.info}>
           Relation
        </Text>
      </View>

      <View style={styles.CheckBox}>
  <BouncyCheckbox
    isChecked={isChecked}
    onPress={() => setIsChecked(!isChecked)}
    text="Created at"
  />
</View>
<View style={styles.CheckBox}>
  <BouncyCheckbox
    isChecked={isChecked}
    onPress={() => setIsChecked(!isChecked)}
    text="Adress"
  />
</View>

      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Save"
        onPress={onPress}
      />
    </View>
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
  infoBox1: {
    width: '90%',
    height: 90,
    backgroundColor: '#F7F8F9',
    marginLeft: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    margin:10,
  },
  infoBox: {
    width: '90%',
    height: 60,
    backgroundColor: '#F7F8F9',
    marginLeft: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    margin:10,
  },
  CheckBox:{
    margin:10,

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  Button:{
marginLeft:15,
  },
});
export default Add;
