import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import InputText from '../components/InputText';
import {defaultNetwork, setDefaultNetwork} from '../store/slices/network';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import Axios from '../Network/Axios';

const Network = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const network = useSelector(defaultNetwork);

  useEffect(() => {
    fetchData();
    console.log('network', network);
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get('/connections/');
      console.log('lamis');
      console.log('response', response);
      setData(response.data);
      dispatch(setDefaultNetwork(response.data));
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
      setLoading(false);
    }
  };
  const handleSearch = text => {
  setSearch(text);
  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
  setFilteredData(filtered);
};
// const onPress = async () => {
//   let connection_id; 
//   for (let i = 0; i < network.length; i++) {
//     connection_id = network[i].id; 
//     console.log('connection_id', connection_id);
//   }
//   const response = await Axios.get(`/connections/${connection_id}`);
//   dispatch(setDefaultNetwork(response.data));
//   console.log('response', response);
//   }
  return (
    <ScrollView style={styles.wholeScreen}>
    <View style={styles.networkScreen}>
      <BackIcon style={styles.back} />
      <Text style={styles.network}>Network</Text>
      <InputText DefaultText="Search Here" onChangeText={handleSearch}/>
      <FlatList
        data={filteredData}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecognizedPerson', { connectionId: item.id })}>
          <View style={styles.networkScroll}>
            <LinearGradient
              colors={['#F5F8FA', '#BABDBF']}
              style={styles.gradient}>
              <Image
                source={{uri: `http://52.58.150.200${item.image}`}}
                style={styles.networkImage}
              />
              <Text style={styles.info}>{item.name}</Text>
              <Text style={styles.info}>{item.relation}</Text>
            </LinearGradient>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  networkScreen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    height: '100%',
    alignItems: 'center',
    fontFamily:'Urbanist'
  },
  network: {
    color: '#1E232C',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Urbanist',
    top: '-5.5%',
    marginBottom: 10,
  },
  back: {
    marginRight: 30,
  },
  networkScroll: {
    height: 380,
    width: 250,
    backgroundColor: '#EBE8FC',
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  info: {
    color: '#32323b',
    fontWeight: '700',
    fontSize: 18,
    marginLeft:15,
    marginBottom:3
  },
  networkImage: {
    width:220,
    height:300,
    borderRadius:10,
    alignSelf:'center',
    marginBottom:7,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  wholeScreen: {
    backgroundColor: '#FFFFFF',
  },
});
export default Network;
