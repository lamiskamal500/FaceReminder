import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import RNFS from 'react-native-fs';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {setDefaultNetwork} from '../store/slices/network';
import {defaultNetwork} from '../store/slices/network';
import {useDispatch, useSelector} from 'react-redux';
import Axios from '../Network/Axios';

3;
const ExternalCamera = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const network = useSelector(defaultNetwork);
  const [modalVisible, setModalVisible] = React.useState(false);
  const GetImage = async () => {
    const response = await Axios.get('/preview-image/');
    dispatch(setDefaultNetwork(response.data));
    console.log('response', response);
  };
  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const imageURL = await GetImage();

    const response = await Axios.post('/recognize/', {image: network.image});
    if (response.status === 200) {
      dispatch(setDefaultNetwork(response.data));
      navigation.navigate('RecognizedPerson', {connectionId: null});
      setDisable(false);
      setLoading(false);
    } else if (response.status === 201) {
      dispatch(setDefaultNetwork(response.data));
      setModalVisible(!modalVisible);
      setDisable(false);
      setLoading(false);
    } else if (response.status === 400) {
      navigation.navigate('HomePage');
      Alert.alert('Face could not be detected' , 'Please take another photo');
    }
    console.log('response', response);
  };
  useEffect(() => {
    console.log('network', network)
  }, []);
  const onPressAdd = () => {
    navigation.navigate('Add');
    setModalVisible(false)
  };
  return (
    <View style={styles.uploadScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.uploadText}>Review Camera Image</Text>
      <View style={styles.uploadFrame}>
        <Image
          source={{uri: 'http://3.120.37.202/media/ESP32CAMCap.jpg?timestamp=16263625820936'}}
          // source={require('../assets/kenzy.jpeg')}
          style={styles.image}
        />
      </View>
      <Button
        style={styles.recognize}
        buttonText="Recognize"
        onPress={onPress}
        loading={loading}
        backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
      />
      <Text style={styles.again}>OR</Text>
      <Button
        style={styles.recognize}
        buttonText="Take Photo Again"
        // onPress={onPress}
        // loading={loading}
        backgroundColor={{backgroundColor: disable ? '#8391A1' : '#1E232C'}}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Image
              source={require('../assets/confused.png')}
              style={styles.confused}
            />
            <Text style={styles.notRecognized}>This Person doesn't exist</Text>
            <Text style={styles.notRecognizedText}>
              You can add information about this person
            </Text>
            <Button
              buttonText="Add"
              style={styles.addButton}
              onPress={onPressAdd}
            />
          </View>
        </View>
      </Modal>
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
    marginTop: 12,
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
    alignSelf: 'center',
    marginVertical: 20,
  },
  image: {
    borderRadius: 20,
    width: 290,
    height: 360,
  },
  upload: {
    alignItems: 'center',
    marginVertical: 60,
  },
  clickText: {
    color: '#242634',
    fontSize: 15,
    marginVertical: 150,
    textAlign: 'center',
  },
  imageStyle: {
    width: 290,
    height: 360,
    borderRadius: 20,
  },
  recognize: {
    width: 200,
    paddingVertical: 15,
    alignSelf: 'center',
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
    textAlign: 'center',
  },
  addButton: {
    width: 210,
  },
  again: {
    color: '#1E232C',
    fontSize: 20,
    fontFamily: 'Urbanist',
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: 10,
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
    color: '#696F76',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notRecognizedText: {
    color: '#8391A1',
    marginBottom: 35,
    width: '65%',
    textAlign: 'center',
  },
  addButton: {
    width: 210,
  },
});
export default ExternalCamera;
