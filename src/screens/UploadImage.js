import React , {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BackIcon from '../components/BackIcon';
import {launchImageLibrary} from 'react-native-image-picker';


const UploadImage = () => {
    const [image, setImage] = React.useState('');
    const handleImage = async () => {
        const options = {
          mediaType: 'photo',
        };
        const result = await launchImageLibrary(options);
        setImage(result.assets[0].uri);
        console.log('result', result)
        const data = new FormData()
        data.append(result.assets[0])
        console.log('data', data)
      };
      useEffect(() => {
        console.log('image', image);
      }, []);

      

  return (
    <View style={styles.uploadScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.uploadText}>Upload your Photo</Text>
      <TouchableOpacity style={styles.upload} onPress={() => {
              console.log('lamis');
              handleImage();
            }}>
        <View style={[{borderColor: image ? 'white' : '#E2E6EA' }, styles.uploadFrame]}>
        {image &&
        <Image
              style={styles.imageStyle}
              source={{uri: image}}
              alt="avatar"
            />
        }
        {!image ? (
          <Text style={styles.clickText}>
            Click to browse {'\n'} your files
          </Text>) : ''
        }
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.recognize} >
        <Text style={styles.recognizeText}>Add OR Recognize </Text>
        <Image source={require('../assets/arrow.png')} style={styles.icon}/>
      </TouchableOpacity>
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
    marginVertical: 70,
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
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  icon:{
    width:35,
    height:38,
    top:'-2.5%'
  },
  recognizeText:{
    color: '#1E232C',
  }
});
export default UploadImage;
