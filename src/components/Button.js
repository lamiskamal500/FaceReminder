import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useState} from 'react';

const Button = props => {
  
  console.log(props);
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      disabled={props.disable}
      onPress={props.onPress}>
      <Text style={props.styleButton}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E232C',
    color: '#FFFFFF',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    width: 331,
    fontFamily: 'Urbanist',
    paddingVertical: 20,
  },
});
export default Button;
