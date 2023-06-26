import React from 'react';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
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
  return (
    <View style={styles.RecognizeScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.details}>Details</Text>
      <Image
        source={require('../assets/RecognizedPerson.png')}
        style={styles.image}
      />
      <Text style={styles.info}>Parsley Montana</Text>
      <Text style={styles.info2}>My Friend</Text>

      <View style={styles.extraDetails}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.aboutText}>
          Nostrud deserunt sit anim ea. Duis tempor duis adipisicing culpa
          ullamco in cupidatat. Ut laboris consectetur labore fugiat laboris
          fugiat laboris eu minim cillum. Anim id magna excepteur eiusmod
          eiusmod.
        </Text>
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
    marginBottom: 7,
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
