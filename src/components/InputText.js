import {View, TextInput } from 'react-native';
import React from 'react';
const InputText=(props)=>{
    return(
        <View style = {styles.InputTextStyle}>
               <TextInput
        placeholder={props.DefaultText}
       
        />
        </View>
    );
};
const styles = StyleSheet.create({
    InputTextStyle:{
        backgroundColor: 'F7F8F9',
        width:331,
        height:56,
        borderRadius:10,
        color:'8391A1'
    },
    

})

export default InputText
