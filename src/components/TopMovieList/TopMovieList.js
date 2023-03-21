import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import useFetch from "../../hooks/useFetch"
import TopMovieCards from "../../components/TopMovieCards"
import { useNavigation } from '@react-navigation/native';
const TopMovieList = () => {
  const navigation = useNavigation();
    const api = 'https://api.themoviedb.org/3/movie/popular?api_key=d3c011b374dea8dfa4c195b50b62af15&language=en-US&page=13';
    const { loading, data, error } = useFetch(api);
    const topRenderJob = ({ item }) => <TopMovieCards Item={item} handlePress={() => handlePress(item)} />
    const handlePress = item => {
      navigation.navigate('Movie', { item });
    };
    if (loading) {
      return <ActivityIndicator size="large" />;
    }
    if (error) {
      return <Text>{error}</Text>;
    }

  return (
    <View >
    <FlatList
      horizontal={true}
      data={data.results}
      renderItem={topRenderJob}
    />
  </View>
  )
}

export default TopMovieList