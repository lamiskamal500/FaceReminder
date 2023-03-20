import React from 'react';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';

const RecognizedPerson = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.RecognizeScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.details}>Details</Text>
      <Image
        source={require('../assets/RecognizedPerson.png')}
        style={styles.image}
      />
      <Text style={styles.info}>Parsley Montana</Text>
      <Text style={styles.info}>Friend</Text>
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Extra Details"
        onPress={()=>navigation.navigate('ExtraDetails')}
      />
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
    width: 220,
    height: 220,
    marginBottom: 18,
  },
  details: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Urbanist',
    top: '-5.5%',
    marginBottom: 30,
  },
  info: {
    color: '#1E232C',
    fontSize: 26,
    fontWeight: '900',
    fontFamily: 'Urbanist',
    marginBottom: 7,
  },
  back: {
    marginRight: 20,
  },
});
export default RecognizedPerson;
