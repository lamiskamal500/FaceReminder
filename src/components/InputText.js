import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
const InputText = props => {
  return (
    <View style={styles.InputTextStyle}>
      <TextInput
        style={styles.TextStyle}
        placeholder={props.DefaultText}
        placeholderTextColor="#8391A1"
        onChangeText={props.onChangeText}
        value={props.text}
      />
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
    marginVertical: 12,
    borderColor: '#E8ECF4',
    marginVertical: 12,
    placeholderTextColor: '#8391A1',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  TextStyle: {
    color: '#1E232C',
    fontWeight: 'bold',
  },
});

export default InputText;
