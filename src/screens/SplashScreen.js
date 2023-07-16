import React, {useEffect} from 'react';
import {View, Image,StyleSheet,Dimensions } from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Simulate a delay before navigating to the main screen
    const timeout = setTimeout(() => {
      navigation.replace('HomePage'); // Replace 'Main' with the name of your main screen component
    }, 2000); // Specify the duration of the splash screen in milliseconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={styles.Img} source={require('../assets/Splash_img.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
 
    Img: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
export default SplashScreen;
