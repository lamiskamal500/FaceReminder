import React , {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import RNFS from 'react-native-fs';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {setDefaultNetwork} from '../store/slices/network';
import {defaultNetwork} from '../store/slices/network';
import {useDispatch} from 'react-redux';
import Axios from '../Network/Axios';

3
const UploadImage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);


  return (
    <View style={styles.uploadScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.uploadText}>Review Camera Image</Text>
        <View style={styles.uploadFrame}>
        
        </View>
      <Button
          style={styles.recognize}
          buttonText="Recognize"
          onPress={onPress}
          loading={loading}
          backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  uploadScreen: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    fontFamily: 'Urbanist',
    height: '100%',
  },
  uploadText: {
    color: '#1E232C',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 25,
  },
  back: {
    marginLeft: 15,
  },
  uploadFrame: {
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: '#E2E6EA',
    borderRadius: 20,
    width: 290,
    height: 360,
    alignItems: 'center',
  },
  upload: {
    alignItems: 'center',
    marginVertical: 60,
  },
  clickText: {
    color: '#242634',
    fontSize: 15,
    marginVertical: 150,
    textAlign:'center'
  },
  imageStyle: {
    width: 290,
    height: 360,
    borderRadius: 20,
  },
  recognize:{
    width: 200,
    paddingVertical: 15,
    alignSelf:'center'
  },
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modal: {
    backgroundColor: '#ffffff',
    margin: 40,
    marginTop: 150,
    padding: 25,
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
    color: '#8391A1',
    marginBottom: 35,
    width: '65%',
    textAlign:'center'
  },
  addButton: {
    width: 210,
  },
});
export default UploadImage;
