import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import InputText from '../components/InputText';

const Network = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.networkScreen}>
    <BackIcon style={styles.back} />
    <Text style={styles.network}>Network</Text>
    <InputText
      DefaultText="Search Here"
    />
    <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal
          renderItem={_ => (
            <View style={styles.networkScroll}/>
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