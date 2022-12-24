import React , { useState } from 'react';
import { TouchableOpacity,Text,View,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import InputText from '../components/InputText';
import Button from '../components/Button';
import HomePage from './HomePage';

const Login = ()=>{
    const navigation = useNavigation();
    

    return(
        <View style={styles.LoginScreen}>
            <View>
            <Text style={styles.WelcomeText}>Welcome back! Glad to see you, Again!</Text>
            </View>
            
            <InputText DefaultText='Enter your email'/>

            <InputText DefaultText='Enter your password'/>

            <TouchableOpacity style={{width:'90%', }}
             onPress={()=> navigation.navigate('ForgetPassword')}>
            <View ><Text style={styles.ForgetText} >Forget Password?</Text></View>
            </TouchableOpacity>
            <Button style={styles.RegisterButton} buttonText='login' onPress={()=> navigation.navigate('HomePage')}/>

        <View style={styles.DontHaveAccountfull}>
        <Text style={styles.DontHaveAccountText}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.RegisterNowText}>Register Now</Text>
        </TouchableOpacity>
      </View>
            
        </View>
    );
};
const styles = StyleSheet.create({
    LoginScreen:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:'100%',
    },
    WelcomeText:{
        color:"#1E232C",
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Urbanist',
        marginTop:50,
        marginBottom:30,
        marginHorizontal:30,
    },
    ForgetText:{
        color:"#6A707C",
        fontWeight:"SemiBold",
        fontSize:14,
        fontFamily:'Urbanist',
        textAlign:"right",

    },
    DontHaveAccountfull: {
        marginTop: 250,
        display:"flex",
        flexDirection:'row'
      },
    DontHaveAccountText:{
        color:'#1E232C',
        
    },
    RegisterNowText:{
        color:'#35C2C1',

    },
    RegisterButton:{
        marginTop:30,
    }

    

})

export default Login;