import React , {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import Axios from '../Network/Axios';


const UploadImage = () => {
  const navigation = useNavigation();
    const [image, setImage] = React.useState('');
    const [images, setImages] = React.useState('');
    const handleImage = async () => {
        const options = {
          mediaType: 'photo',
        };
        const result = await launchImageLibrary(options);
        setImages(result.assets[0].uri);
        console.log('result', result)
        // const image = new FormData()
        // image.append(result.assets[0])
        // console.log('data', image)
        const imageData = new FormData();
        imageData.append(result.assets[0]);
      
        console.log('imageData', imageData);
        setImage(imageData);      
      };
      useEffect(() => {
        console.log('image', images);
      }, []);
    const onPress = async () => {
      const response = await Axios.post('/recognize/', image);
      
      if (response.status === 200) {
        navigation.navigate('RecognizedPerson');
      }
      else if(response.status === 201) {
        navigation.navigate('Add');
      }
      else if(response.status === 400){
        navigation.navigate('HomePage');
      }
      console.log('response', response)
    }
  return (
    <View style={styles.uploadScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.uploadText}>Upload your Photo</Text>
      <TouchableOpacity style={styles.upload} onPress={() => {
              console.log('lamis');
              handleImage();
            }}>
        <View style={[{borderColor: images ? 'white' : '#E2E6EA' }, styles.uploadFrame]}>
        {images &&
        <Image
              style={styles.imageStyle}
              source={{uri: images}}
              alt="avatar"
            />
        }
        {!images ? (
          <Text style={styles.clickText}>
            Click to browse {'\n'} your files
          </Text>) : ''
        }
        </View>
      </TouchableOpacity>
      <Button
          style={styles.recognize}
          buttonText="Recognize"
          onPress={onPress}
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
  }
});
export default UploadImage;
