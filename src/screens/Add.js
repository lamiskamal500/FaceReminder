import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import {useSelector} from 'react-redux';
import {defaultUser} from '../store/slices/user';
import Button from '../components/Button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const Add = () => {
  const navigation = useNavigation();
  const user = useSelector(defaultUser);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log('user', user);
  });

  return (
    <View style={styles.StaticProfileScreen}>
      <View style={styles.Images}>
        <BackIcon />
        <Text style={styles.ProfileText}>New</Text>
        <Image
          source={require('../assets/Icon.png')}
          style={styles.ShareIcon}
        />
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
        <Text style={styles.info}>Name</Text>
      </View>

      {/* <Text style={styles.EmailText}>Phone number</Text> */}
      <View style={styles.infoBox1}>
        <Text style={styles.info}>Biography</Text>
      </View>

      {/* <Text style={styles.EmailText}>Address</Text> */}
      <View style={styles.infoBox}>
        <Text style={styles.info}>Relation</Text>
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
        buttonText="Save "
      />
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
    color: '#1D1838',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: -110,
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
    margin: 10,
  },
  infoBox: {
    width: '90%',
    height: 60,
    backgroundColor: '#F7F8F9',
    marginLeft: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    margin: 10,
  },
  CheckBox: {
    margin: 10,
    marginLeft: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  Button: {
    marginLeft: 15,
  },
});
export default Add;
