import React from 'react';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';

const Recognize = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.RecognizeScreen}>
      <View style={styles.Image}>
        <BackIcon />
        <TouchableOpacity>
          <Image
            source={require('../assets/User2.png')}
            style={styles.User2}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%'}}>
        <Text style={styles.HiText}>What do you want?</Text>
      </View>
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Add new person"
      />
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Recognize person"
        onPress={() => navigation.navigate('RecognizedPerson')}
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
  HiText: {
    color: '#1E232C',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
    marginTop: 60,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  User2: {
    width: 44,
    height: 44,
    borderRadius: 30,
    marginTop:15,
    marginRight:10
  },
  Image: {
    flexDirection: 'row',
    width:'90%'
  },
  Button: {
    marginTop: 60,
  },
});
export default Recognize;
