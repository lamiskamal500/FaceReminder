import {View, TextInput,StyleSheet } from 'react-native';
import React from 'react';
const InputText=(props)=>{
    return(
        <View style = {styles.InputTextStyle}>
               <TextInput
        placeholder={props.DefaultText}
        // value
        // onchange
       
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
        placeholderTextColor:'#8391A1',
        textAlign:'left'
    },
    

})

export default InputText
