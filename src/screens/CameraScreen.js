import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Linking,
  Dimensions,
} from 'react-native';
var RNFS = require('react-native-fs');
import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
const fullWindowHeight = Dimensions.get('window').height;
const CameraScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(null);
  // const [flashToggle, setFlashToggle] = useState(false);
  const cameraRef = useRef(Camera);
  const [photoPath, setPhotoPath] = useState('');

  const [torch, setTorch] = useState(false);
  const devices = useCameraDevices();
  const [viewImage, setViewImage] = useState(false);
  const device = devices.back;

  // const [device, setDevice] = useState(devices.back);

  // // const device = camView === 'back' ? devices.back : devices.front;

  // const devices = useCameraDevices();

  const camerapermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setLoading(devices);
  }, [devices]);

  useEffect(() => {
    camerapermission();
  }, [camerapermission, devices]);
  // {{ useEffect(() => {
  //       camView === 'back' ? setDevice(devices.back) : setDevice(devices.front);
  //     }, [flash]);}
  // {useEffect(()=>{
  // setTorch(!torch)
  // },[torch]

  // )}
  const exit = () => {
    setViewImage(false), setPhotoPath('');
  };

  const takePhoto = async () => {
    setLoading(true);
    // setViewImage(!viewImage);

    try {
      if (cameraRef.current == null) {
        throw new Error('Camera Ref is null');
      }
      console.log('photo taking....');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'quality',
        flash: `${torch ? 'on' : 'off'}`,
        enableAutoRedEyeReduction: true,
      });
      const photoName = photo.path.split('/')[photo.path.split('/').length - 1];
      // Create pictureDirectory if it does not exist
      const path = RNFS.ExternalDirectoryPath + `/${photoName}`;
      //when i update X (in the saved image name) with a new number,
      //<Image> views the correct image.

      await RNFS.moveFile(photo.path, path);
      setPhotoPath('file://' + path);
      console.log(' photopath', photoPath);
      console.log(' path', path);
      console.log(photoName);
      photo ? setViewImage(true) : setViewImage(false);
      // console.log(photo);
    } catch (error) {
      // console.log(error, 'kkkk');
    }
  };
  if (device == null) {
    return <ActivityIndicator style={{flex: 1}} size={50} color="red" />;
  }
  return (
    <>
      {viewImage && (
        <>
          <Image
            source={{uri: photoPath}}
            style={[styles.image, {backgroundColor: 'black'}]}
          />
          <TouchableOpacity
            style={{position: 'absolute'}}
            onPress={() => {
              exit();
            }}>
            <Image source={require('../assets/exit.png')} style={styles.exit} />
          </TouchableOpacity>

          <Button buttonText="Send" style={styles.sendButton}/>
        </>
      )}

      {!viewImage && (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            photo={true}
            isActive={true}
            ref={cameraRef}

            // fps={240}
          />

          <View style={styles.shuttercontainer}>
            <TouchableOpacity
              style={styles.shutterFlash}
              onPress={() => {
                console.log(torch);
                setTorch(!torch);
              }}>
              <Image
                style={styles.cameraFlashBtn}
                source={
                  torch
                    ? require('../assets/flash.png')
                    : require('../assets/flashoff.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shutter}
              onPress={() => {
                takePhoto();
              }}>
              {/* <View style={styles.shutter}> */}
              <View style={styles.shutterBtn} />
              {/* </View> */}
            </TouchableOpacity>
            {/* {<TouchableOpacity
          style={styles.cameraFlipBtn}
          onPress={() => {
            camView === 'back' ? setCamView('front') : setCamView('back');
          }}>
          <Image source={require('../assets/flip.png')} />
        </TouchableOpacity>} */}
          </View>
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  shuttercontainer: {
    height: '100%',
    position: 'relative',
  },
  shutterBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: '#ffffff',
    borderRadius: 100,
  },
  cameraFlashBtn: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    // borderWidth:2,
    // borderColor:"#fff",
  },
  shutter: {
    position: 'absolute',
    marginHorizontal: 'auto',
    bottom: 50,
    left: '43%',
  },
  shutterFlash: {
    position: 'absolute',
    marginHorizontal: 'auto',
    left: 40,
    width: 25,
    bottom: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  exit: {
    height: 70,
    width: 70,
  },
  send: {
    height: 50,
    width: 50,
  },
  sendButton: {
    position: 'absolute',
    color: 'black',
    fontSize:25,
    bottom: 50,
    left: '35%',
    backgroundColor: '#FFFFFF',
    width: 100,
    position: 'absolute',
  },
});
export default CameraScreen;
