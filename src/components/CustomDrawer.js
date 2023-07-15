import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {defaultUser} from '../store/slices/user';
import {setDefaultUser} from '../store/slices/user';
import Axios from '../Network/Axios';

const DrawerItems = (props) =>{
return(
    <TouchableOpacity onPress={props.onpress}>
    <Text style={styles.drawerItems}>{props.item}</Text>
    </TouchableOpacity>
)
};
const CustomDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(defaultUser);

  useEffect(() => {
    onPress();
    console.log('user', user);
  }, []);

  const onPress = async () => {
    const response = await Axios.get('/profiles/');
    if (response.status === 200) {
      dispatch(setDefaultUser(response.data));
    }
    console.log('response', response);
  }
  return (
    <View style={styles.customDrawer}>
      <Image source={user.image ? {uri: `http://52.58.150.200${user.image}`} : require('../assets/User2.png')} style={styles.user}/>
      <Text style={styles.profileName}>{user.fullname}</Text>
       <DrawerItems item='HomePage' onpress={()=>navigation.navigate('HomePage')}/>
       <DrawerItems item='Profile' onpress={()=>navigation.navigate('StaticProfile')}/>
       <DrawerItems item='Edit Profile' onpress={()=> navigation.navigate('EditProfile')}/>
       <DrawerItems item='Network' onpress={()=> navigation.navigate('Network')}/>
       <DrawerItems item='Logout' onpress={()=>navigation.navigate('Login')}/>
    </View>
  );
};
const styles = StyleSheet.create({
  customDrawer: {
    display: 'flex',
    alignItems: 'center',
    marginTop:40
  },
  profileName: {
    color: '#434954',
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20
  },
  drawerItems:{
    color:'#434954',
    fontSize:22,
    marginVertical:8
  },
  user:{
    width: 130,
    height: 130,
    borderRadius:100
  }
});
export default CustomDrawer;
