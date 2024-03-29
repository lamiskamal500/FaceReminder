import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';
const InputText = props => {
  return (
    <View style={styles.InputTextStyle}>
      <View style={[styles.floatingPlaceholder, props.style]}>
        <Text style = {styles.placeholderText}>{props.DefaultText}</Text>
      </View>
      <TextInput
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
        style={styles.TextStyle}
        // placeholder={props.DefaultText}
        placeholderTextColor="#8391A1"
        onChangeText={props.onChangeText}
        value={props.text}
        onFocus={props.onFocus}
        
      />
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  InputTextStyle: {
    backgroundColor: '#F7F8F9',
    width: '90%',
    height: 60,
    borderRadius: 8,
    color: '#8391A1',
    borderColor: '#E8ECF4',
    borderWidth: 1,
    marginVertical: 12,
    placeholderTextColor: '#8391A1',
    paddingHorizontal: 20,
    paddingRight: 50,
    paddingTop: 5,
  },
  TextStyle: {
    color: '#1E232C',
    fontWeight: 'bold',
  },
  floatingPlaceholder:{
    backgroundColor:"white",
    position:'absolute',
    bottom:45,
    right:205,
    padding:4,
    resizeMode:'contain',
    zIndex:10
  },
  placeholderText:{
    color:'#8391A1',
    font:12
  }
});

export default InputText;
