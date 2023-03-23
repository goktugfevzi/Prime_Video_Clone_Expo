import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default Button = ({text, onPress, loading,IconColor="#333333", icon ,theme="primary",size=25}) => {

  //primary,secondary,tertiary,fourth,fifth,sixth
   return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[theme].button_container}>
          <Icon name={icon} color={IconColor} size={size} /> 
          <Text style={styles[theme].title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};


