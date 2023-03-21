import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from "./MovieCards.style";

const MovieCards = ({Item, handlePress}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        <Image
        style={styles.image}
        source={{
          uri: "https://image.tmdb.org/t/p/w500/"+Item.poster_path,
        }}
      />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCards;