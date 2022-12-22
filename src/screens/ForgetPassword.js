import React from 'react';
import { TouchableOpacity,Text,View,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Button from '../components/Button';
const ForgetPassword = ()=>{
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('CreateNewPassword')}>
                <Text style={{color:'black'}}>Create new</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ForgetPassword;