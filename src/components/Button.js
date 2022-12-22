import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Button = (props)=>{
    console.log(props)
    return(
        <TouchableOpacity style={[styles.button, props.style]} >
            <Text>
                {props.buttonText}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   
    button:{
        backgroundColor:'#1E232C',
        color:'#FFFFFF',
        borderRadius:8,
        display:'flex',
        alignItems:'center',
        width:331,
        height:56,
        fontFamily:'Urbanist',
        paddingVertical:20,
    }
    
})
export default Button;