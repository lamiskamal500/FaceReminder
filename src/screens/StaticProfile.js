import React , { useState } from 'react';
import { TouchableOpacity,Text,View,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import InputText from '../components/InputText';
import Button from '../components/Button';
import BackIcon from '../components/BackIcon';


const StaticProfile = ()=>{
    const navigation = useNavigation();
    

    return(
        <View style={styles.StaticProfileScreen}>
            <View style={styles.Images}>
          <BackIcon/>
          <Text style={styles.ProfileText}>profile</Text>
          <Image source={require('../assets/Icon.png')} style={styles.ShareIcon} />
          </View>
          
          <View>
          <Image source={require('../assets/User2big.png')} style={styles.User2} />
          </View>
          <View style={{alignItems:'center'}}>
          <Text style={styles.UserText}> NADOUD</Text>
          <Text style={styles.me}> me</Text>
          </View>
          <View style={styles.EmailSquare} >
          
          <Text style={styles.EmailText}> E-mail</Text>
          <View style={{width:'110%'}}>
          <InputText  DefaultText='xxxx@xxxxx.com'/>
          </View>
          </View>
          <View style={styles.EmailSquare} >
          
          <Text style={styles.EmailText}>Phone number</Text>
          <View style={{width:'110%'}}>
          <InputText  DefaultText='0xxxxxxxxxxx'/>
          </View>
          </View>
          <View style={styles.EmailSquare} >
          
          <Text style={styles.EmailText}>Address</Text>
          <View style={{width:'110%'}}>
          <InputText  DefaultText='xxxxxxxxxxx at xxxx'/>
          </View>
          </View>
        </View>
    );
};
const styles = StyleSheet.create({
    StaticProfileScreen:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:'100%',
    },
    Images:{
         display:"flex",
        flexDirection:'row',
        width:'90%',
    },
    ShareIcon:{
         width: 14,
        height: 16,
        marginTop:30,
        marginLeft:120,
        // width:"%",
    
        
        // // alignSelf:'flex-start',
         

    },
    User2:{
      width: 160,
      height: 160,
        
         marginTop: 10,
         borderRadius:200,
         marginBottom:5,
        // // alignSelf:'flex-start',
        //  marginLeft:230

    },
    ProfileText:{
        color:"#1D1838",
        fontSize:16,
        fontWeight:'bold',
        // fontFamily:'Urbanist',
        marginTop:25,
        marginLeft:-130,
        // alignSelf:'flex-start',
        
        // marginBottom:30,
        // marginHorizontal:30,
        // textAlign:"Top"
    },
    UserText:{
        color:"#1D1838",
        fontSize:30,
        fontWeight:'semibold',
      

    },
    me:{
        color:"#898794",
        fontSize:20,
        fontWeight:'semibold',
        marginTop:-9,
        
    },
    text:{
        color:"#898794",
        fontSize:15,
        fontWeight:'semibold',
        textAlign:"left",
        // marginTop:10,
        // marginBottom:10,
        
        // marginLeft:
    },
    EmailSquare:{
        // alignItems:'flex-start',
        width:'95%'

    },
    EmailText:{
        color:"#1D1838",
        fontSize:25,
        fontWeight:'semibold',
        textAlign:"left",
         marginLeft:0,
  
    }

})

export default StaticProfile;