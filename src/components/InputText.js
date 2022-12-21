import {View, TextInput,StyleSheet } from 'react-native';
import React from 'react';
const InputText=(props)=>{
    return(
        <View style = {styles.InputTextStyle}>
               <TextInput
        placeholder={props.InputText}
       
        />
        </View>
    );
};
const styles = StyleSheet.create({
    InputTextStyle:{
        backgroundColor: '#F7F8F9',
        width:331,
        height:60,
        borderRadius:8,
        color:'#8391A1',
        placeholderTextColor:'#8391A1',
        borderBottomColor:'#E8ECF4',
        marginVertical:12
    },
    

})

export default InputText
