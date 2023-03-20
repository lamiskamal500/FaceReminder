import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';

const ExtraDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.ExtraDetailsScreen}>
      <View style={styles.Images}>
        <BackIcon />
        <Text style={styles.ExtraText}>ExtraDetails</Text>
        <Image
          source={require('../assets/Icon.png')}
          style={styles.ShareIcon}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/RecognizeDetails.png')}
          style={styles.person}
        />
        <Text style={styles.PersonText}>
         Parsley Montana
        </Text>
        <Text style={styles.PersonText}>Friend</Text>
      </View>

      <Text style={styles.infoText}>Biography</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>
          {'xxxxxxxxxxxxxxxxx'}
        </Text>
      </View>

      <Text style={styles.infoText}>Address</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>{'xxxxxxxx at xxxxx'}</Text>
      </View>

      <Text style={styles.infoText}>Created at</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>
          {'xx/xx/xxxx'}
        </Text>
      </View>
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Done"
      />
    </View>
  );
};
const styles = StyleSheet.create({
    ExtraDetailsScreen: {
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
  person: {
    width: 160,
    height: 160,
    marginTop: 10,
    borderRadius: 200,
    marginBottom: 5,
  },
  ExtraText: {
    color: '#1D1838',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: -130,
  },
  PersonText: {
    color: '#1D1838',
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoText: {
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
  buttonText: {
    fontSize: 22,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  Button: {
    width: 230,
    paddingVertical: 15,
    marginTop:15,
    marginLeft:65
    
    
    
  },
});
export default ExtraDetails;
