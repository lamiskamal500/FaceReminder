import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const Login = ()=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>
                back
            </Text>
        </TouchableOpacity>
    )
}
export default Login;