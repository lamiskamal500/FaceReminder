import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  ScrollView
} from 'react-native';
import RNFS from 'react-native-fs';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {setDefaultNetwork} from '../store/slices/network';
import {useDispatch} from 'react-redux';
import ImageResizer from 'react-native-image-resizer';
import Axios from '../Network/Axios';

const UploadImage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  // const handleImage = async () => {
  //     const options = {
  //       mediaType: 'photo',
  //     };
  //     const result = await launchImageLibrary(options);
  //     setImages(result.assets[0].uri);
  //     console.log('result', result)
  //     const imageData = new FormData();
  //     imageData.append(result.assets[0]);
  //     console.log('imageData', imageData);
  //     setImage(imageData);
  //   };
  //   useEffect(() => {
  //     console.log('image', images);
  //   }, []);
  const convertImageToBase64 = async imageUri => {
    try {
      const fileUri = `file://${imageUri}`;
      const base64Data = await RNFS.readFile(fileUri, 'base64');
      const mimeType = 'image/jpeg';

      return `data:${mimeType};base64,${base64Data}`;
    } catch (error) {
      console.log('Error converting image to Base64:', error);
    }
  };

  const handleImage = async () => {
    const options = {
      mediaType: 'photo',
    };

    try {
      const result = await launchImageLibrary(options);

      if (result.didCancel) {
        console.log('User cancelled image picker');
        return;
      }

      const selectedImageUri = result.assets[0].uri;
      // const resizedImage = await ImageResizer.createResizedImage(
      //   imageUri,  // path to the original image
      //   newWidth,  // desired width
      //   newHeight, // desired height
      //   'JPEG',    // image format (optional, default is 'JPEG')
      //   quality,   // image quality (optional, default is 100)
      //   rotation,  // image rotation (optional, default is 0)
      // );
      setImageUri(selectedImageUri);
      console.log('result', result);
      const base64Image = await convertImageToBase64(selectedImageUri);
      console.log('image', imageData)
      setImageData(base64Image);
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };

  console.log('image', imageData)

  const onPress = async () => {
    setDisable(true);
    setLoading(true);
    const response = await Axios.post('/recognize/', {image: imageData});
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
      // navigation.navigate('Add');
    } else if (response.status === 400) {
      navigation.navigate('HomePage');
      Alert.alert('Face could not be detected' , 'Please take another photo');
    }
    console.log('response', response);
  };
  const onPressAdd = () => {
    navigation.navigate('Add');
    setModalVisible(false)
  };
  return (
    <ScrollView style={styles.wholeScreen}>
    <View style={styles.uploadScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.uploadText}>Upload your Photo</Text>
      <TouchableOpacity
        style={styles.upload}
        onPress={() => {
          console.log('lamis');
          handleImage();
        }}>
        <View
          style={[
            {borderColor: imageUri ? 'white' : '#E2E6EA'},
            styles.uploadFrame,
          ]}>
          {imageUri && (
            <Image
              style={styles.imageStyle}
              source={{uri: imageUri}}
              alt="avatar"
            />
          )}
          {!imageUri ? (
            <Text style={styles.clickText}>
              Click to browse {'\n'} your files
            </Text>
          ) : (
            ''
          )}
        </View>
      </TouchableOpacity>
      <Button
        style={styles.recognize}
        buttonText="Recognize"
        onPress={onPress}
        loading={loading}
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wholeScreen: {
    backgroundColor: '#FFFFFF',
  },
  uploadScreen: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    fontFamily: 'Urbanist',
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
    textAlign: 'center',
  },
  imageStyle: {
    width: 290,
    height: 360,
    borderRadius: 20,
  },
  recognize: {
    width: '50%',
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
    width: 200,
  },
});
export default UploadImage;
