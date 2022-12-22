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
            <InputText/>
            <Button buttonText='Register'/>
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
    }
})

export default Login;