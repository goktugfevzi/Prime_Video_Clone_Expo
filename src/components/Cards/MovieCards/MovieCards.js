import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from "./MovieCards.style";
import {POSTER_DOMAIN} from "@env";

export default MovieCards = ({Item, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        <Image
        style={styles.image}
        source={{
          uri: POSTER_DOMAIN+Item.poster_path,
        }}
      />
      </View>
    </TouchableOpacity>
  );
};