import React, { useState } from 'react';
import { TouchableOpacity,Text,View,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Button from '../components/Button';
const HomePage = ()=>{
    return(
        <View style={styles.HomePageMain}>
             <View style={styles.Image}>
             <Image source={require('../assets/menu.png')} style={styles.Menu} />
             <Image source={require('../assets/User2.png')} style={styles.User2} />
             </View>
             <View style={{width:'85%'}}>
             
             </View>
            <View style ={{width:'100%',}} >
                 <Text style ={styles.HiText}> Hi,Jessica </Text>
            </View>
            <Button style={styles.Button} styleButton={styles.buttonText} buttonText='Mobile Camera'/>
            <Button style={styles.Button} styleButton={styles.buttonText} buttonText='External Camera'/>
            <Button style={styles.Button} styleButton={styles.buttonText} buttonText='Local Image'/>
        </View>
    );
};
const styles = StyleSheet.create({
    HomePageMain:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:'100%',
    },
    HiText:{
        color:"#1E232C",
        fontSize:32,
        fontWeight:'bold',
        fontFamily:'Urbanist',
        marginTop:60,
        marginBottom:10,
        marginHorizontal:20,
        // alignItems:'flex-start'
    },
    Button:{
        marginTop:60,
 
    },
    buttonText:{
        fontSize:35,
        fontWeight:"semibold",
        color:'#FFFFFF',
    },
    Menu:{
        width: 20,
        height: 20,
        marginTop: 20,
        alignSelf:'flex-start',
        marginHorizontal:10,
    },
    User2:{
        width: 44,
        height: 44,
         marginTop: 10,
        // // alignSelf:'flex-start',
         marginLeft:200

    },
    Image:{
        // display:"flex",
        flexDirection:'row',
        width:'85%'
    }
})
export default HomePage;