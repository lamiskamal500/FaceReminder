import React from 'react';
import BackIcon from '../components/BackIcon';
import {useState, useEffect} from 'react';
import Button from '../components/Button';
import {defaultNetwork, setDefaultNetwork} from '../store/slices/network';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import Axios from '../Network/Axios';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';

const RecognizedPerson = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {connectionId} = route.params;
  const dispatch = useDispatch();
  const network = useSelector(defaultNetwork);

  const connection_id = network.result;
  const onPress = async () => {
    const response = await Axios.get(`/connections/${connectionId ? connectionId: connection_id}`);
    dispatch(setDefaultNetwork(response.data));
    console.log('response', response);
  };
  useEffect(() => {
    onPress();
    console.log('network', network);
  }, []);
  return (
    <View style={styles.RecognizeScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.details}>Details</Text>
      <View style={styles.circle}>
        <Image
          source={
            network.image
              ? {uri: `http://3.120.37.202/${network.image}`}
              : require('../assets/RecognizedPerson.png')
          }
          style={styles.image}
        />
      </View>
      <Text style={styles.info}>{network.name}</Text>
      <Text style={styles.info2}>{network.relation}</Text>

      <View style={styles.extraDetails}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.aboutText}>{network.biography}</Text>
        <Text style={styles.about}>Address</Text>
        <Text style={styles.aboutText}>Maadi, Cairo, Street 260</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  RecognizeScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  Button: {
    width: 250,
    paddingVertical: 15,
    bottom: '-100%',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 18,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100, // Half of the width and height
    overflow: 'hidden',
    borderColor: 'gray',
    borderWidth: 4,
  },
  details: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Urbanist',
    top: '-5.5%',
    marginBottom: 18,
  },
  info: {
    color: '#1E232C',
    fontSize: 26,
    fontWeight: '900',
    fontFamily: 'Urbanist',
    marginBottom: 4,
  },
  info2: {
    color: '#35C2C1',
    fontSize: 20,
    marginBottom: 20,
  },
  back: {
    marginRight: 20,
  },
  about: {
    fontSize: 16,
    color: '#000001',
    fontWeight: '900',
  },
  extraDetails: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    padding: 15,
    width: 300,
  },
  aboutText: {
    color: 'black',
    marginBottom: 7,
    marginTop: 7,
  },
});
export default RecognizedPerson;
