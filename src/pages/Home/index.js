
import React from 'react';
import { ScrollView,View } from 'react-native';
import MovieList from '../../components/List/MovieList';
import TopMovieList from '../../components/List/TopMovieList';
export default function Home() {
  return (
    <ScrollView>
      <TopMovieList></TopMovieList>
      <View style={{ backgroundColor: "black" }}>
      <MovieList no={2} title={"Continue Watching"}></MovieList>
      <MovieList no={3} prime={"Prime - "} title={"Recommended Movies"}></MovieList>
      <MovieList no={1} prime={"Prime - "} title={"Action & Adventure Movies"}></MovieList>
      <MovieList no={5} prime={"Prime - "} title={"Drama Movies"}></MovieList>
      <MovieList no={14} title={"Start Watching: Recommended"}></MovieList>
      <MovieList no={6} prime={"Prime - "} title={"Comedy Series"}></MovieList>
      <MovieList no={7} title={"Türkiyede ilk 10"}></MovieList>
      <MovieList no={8} prime={"Prime - "} title={"Horror Movies"}></MovieList>
      <MovieList no={9} prime={"Prime - "} title={"James Bond Collection"}></MovieList>
      <MovieList no={10} prime={"Prime - "} title={"Children and Family Movies"}></MovieList>
      <MovieList no={11} prime={"Prime - "} title={"Documentary Movies"}></MovieList>
      <MovieList no={12} prime={"Prime - "} title={"Romantic Movies"}></MovieList>
      <MovieList no={4} prime={"Prime - "} title={"Stand Up Comedy"}></MovieList>
    </View>
    </ScrollView >
  );
}

