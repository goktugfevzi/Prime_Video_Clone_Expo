import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from "./TopMovieCards.style";
import {POSTER_DOMAIN} from "@env";


const MovieCards = ({Item, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
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

export default MovieCards;