import React from 'react';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, View, StyleSheet, Image, Modal} from 'react-native';

const Recognize = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();

  const onPress = async () => {
    // navigation.navigate('RecognizedPerson');
    setModalVisible(!modalVisible)
  }
 
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
        onPress={() => navigation.navigate('Add')}

      />
      <Button
        style={styles.Button}
        styleButton={styles.buttonText}
        buttonText="Recognize person"
        onPress={onPress}
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
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </Modal>
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
  addButton: {
    width: 210,
  },
  notRecognizedText: {
    color: '#8391A1',
    marginBottom: 35,
    width: '65%',
    textAlign:'center'
  },
});
export default Recognize;
