import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';
import styles from "./MovieList.style";
import useFetch from '../../hooks/useFetch';
import MovieCards from '../MovieCards';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
const MovieList = ({ no, title, prime }) => {
  const navigation = useNavigation();
  const api = 'https://api.themoviedb.org/3/movie/popular?api_key=d3c011b374dea8dfa4c195b50b62af15&language=en-US&page=' + no;
  const { loading, data, error } = useFetch(api);
  const renderJob = ({ item }) => <MovieCards Item={item} handlePress={() => handlePress(item)} />
  const handlePress = item => {
    navigation.navigate('Movie', { item });
  };
  if (loading) {
    return <ActivityIndicator size="large" color="#888888"/>
  }

  if (error) {
    return <Lottie source={require('../../../assets/error.json')} autoPlay />
  }
  return (
    <View style={styles.container} >
      <Text style={styles.prime_title}>{prime ? "Prime" : ""}<Text style={styles.title}>{prime ? " — " : ""}{title}</Text></Text>
      <FlatList
        horizontal={true}
        data={data.results}
        renderItem={renderJob}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieList;