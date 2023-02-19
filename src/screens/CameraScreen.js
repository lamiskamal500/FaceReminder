import React, {useEffect, useCallback} from 'react';
import {Linking} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  // const devices = useCameraDevices();
  // const device = devices.back;
  // useEffect(() => {
  //   requestCameraPermission();
  // }, []);
  // const requestCameraPermission = useCallback(async () => {
  //   const permissin = await Camera.requestCameraPermission();

  //   if (permissin == 'denied') await Linking.openSettings();
  // }, []);
  if (device == null) {
    return (
      <View style={{flex:1}}>
      <Camera style={{flex:1}} device={device} isActive={true} enableZoomGesture/>
      </View>
    );
  }
};
export default CameraScreen;
