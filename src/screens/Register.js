import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Button from '../components/Button';
import InputText from '../components/InputText';


const Login = ()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.registerScreen}>

            <Text style={styles.registerMessage}>Hello! Register to get started</Text>
            <InputText placeholder='Email'/>
            <InputText placeholder='Password'/>
            <InputText placeholder='Confirm Password'/>
            <Button buttonText='Register'/>
            <Text style={styles.haveAccount}>Already have an account? 
            <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.loginNow}>Login Now</Text>
            </TouchableOpacity></Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>
                back
            </Text>
        </TouchableOpacity>
        </View>
    )
    
}
const styles = StyleSheet.create({
    registerScreen:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:'100%',
    },
    registerMessage:{
        color:"#1E232C",
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Urbanist',
        marginTop:30,
        marginBottom:30
    },
    haveAccount:{
        color:'#1E232C',
        marginTop:190

    },
    loginNow:{
        color:'#35C2C1',
        marginTop:10
    }
})

export default Login;