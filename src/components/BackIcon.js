import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackIcon = props => {
  const navigation = useNavigation();
  return (
    <View style={[{width: '85%'}, props.style]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back.png')} style={styles.back} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft:0,
    width: 40,
    height: 40,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
});
export default BackIcon;
