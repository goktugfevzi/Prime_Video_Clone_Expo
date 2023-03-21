import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from "./FoundMovieCards.style";
const FoundMovieCards = ({ Item, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.container}>
      <Text style={styles.prime_title}>{Item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoundMovieCards;

