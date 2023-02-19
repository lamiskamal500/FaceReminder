import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const DrawerItems = (props) =>{
return(
    <TouchableOpacity onPress={props.onpress}>
    <Text style={styles.drawerItems}>{props.item}</Text>
    </TouchableOpacity>
)
};
const CustomDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.customDrawer}>
      <Image source={require('../assets/Profile.png')} />
      <Text style={styles.profileName}>Nadoud</Text>
       <DrawerItems item='HomePage' onpress={()=>navigation.navigate('HomePage')}/>
       <DrawerItems item='Profile' onpress={()=>navigation.navigate('StaticProfile')}/>
       <DrawerItems item='Edit Profile' onpress={()=> navigation.navigate('EditProfile')}/>
       <DrawerItems item='Network'/>
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
  }
});
export default CustomDrawer;
