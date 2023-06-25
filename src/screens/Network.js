import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import InputText from '../components/InputText';
import Axios from '../Network/Axios';

const Network = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    Axios.get('/connections/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <View style={styles.networkScreen}>
    <BackIcon style={styles.back} />
    <Text style={styles.network}>Network</Text>
    <InputText
      DefaultText="Search Here"
    />
    <FlatList
          data={data}
          horizontal
          renderItem={(item) => (
            <View style={styles.networkScroll}>
              
            </View>
          )}
        />
    </View>
  );
};
const styles = StyleSheet.create({
    networkScreen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    height: '100%',
    alignItems: "center"
  },
  network: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Urbanist',
    top: '-5.5%',
    // left:'10%',
    marginBottom: 20,
  },
  back: {
    marginRight: 30,
  },
  networkScroll: {
    height: 320,
    width : 250,
    backgroundColor: 'grey',
    margin: 10,
    marginTop:40,
    borderRadius: 10
  }
});
export default Network;