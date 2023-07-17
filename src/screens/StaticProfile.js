import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import {useSelector} from 'react-redux';
import {defaultUser} from '../store/slices/user';

const StaticProfile = () => {
  const navigation = useNavigation();
  const user = useSelector(defaultUser);
  useEffect(() => {
    console.log('user', user);
  });

  return (
    <View style={styles.StaticProfileScreen}>
      <View style={styles.Images}>
        <BackIcon style={styles.backIcon} />
        <Text style={styles.ProfileText}>Profile</Text>
        {/* <Image
        {/* <Image
          source={require('../assets/Icon.png')}
          style={styles.ShareIcon}
        /> */}
        /> */}
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
           source={
            user? user.image ? {uri:  `https://face-reminder.online${user.image}`} :
            require('../assets/User2.png')
              : require('../assets/User2.png')
          }
          style={styles.User2}
        />
        <Text style={styles.UserText}>
          {user ? user.fullname ? user.fullname : 'Jessia': 'Jessia'}
        </Text>
        <Text style={styles.me}>me</Text>
      </View>

      <Text style={styles.EmailText}>Email</Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          { user ? user.email ? user.email : 'xxxx@xxxx.com' : 'xxxx@xxxx.com'}
        </Text>
      </View>

      <Text style={styles.EmailText}>Phone number</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>{ user ? user.phone ? user.phone : '0xxxxxxxx' : '0xxxxxxxx'}</Text>
      </View>

      <Text style={styles.EmailText}>Address</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>
          { user ? user.address ? user.address : 'xxxxxxx at xxxxx' : 'xxxxxxx at xxxxx'}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  StaticProfileScreen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  Images: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
  },
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
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: -140,
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
    width: '90%',
    height: 60,
    backgroundColor: '#F7F8F9',
    marginLeft: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8ECF4',
  }, 
  backIcon:{
    marginLeft: 15,
  }
});
export default StaticProfile;
