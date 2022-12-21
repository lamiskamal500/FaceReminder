import React from 'react';
import { TouchableOpacity,Text,View,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import InputText from '../components/InputText';


const Login = ()=>{
    const navigation = useNavigation();

    return(
        <View>
            <View>
            <Text style={styles.WelcomeText}>Welcome back!Glad to see you, Again!</Text>
            </View>
            <View>
            <InputText placeholder='Enter your email'/>
            </View>
            <View>
            <InputText placeholder='Enter your password'/>
            </View>
            <View><Text style={styles.ForgetText}>Forget Password?</Text></View>
            
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{fontSize:20 , color:'white'}}>
             
            </Text>
        </TouchableOpacity>
        </View>
    )
}
export default Login;