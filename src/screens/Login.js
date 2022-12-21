import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const Login = ()=>{
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{fontSize:20 , color:'white'}}>
                Register
            </Text>
        </TouchableOpacity>
    )
}
export default Login;