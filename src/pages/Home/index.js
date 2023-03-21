
import React from 'react';
import { ScrollView,View } from 'react-native';
import MovieList from '../../components/MovieList/MovieList';
import TopMovieList from '../../components/TopMovieList/TopMovieList';
export default function Home() {
  return (
    <ScrollView>
      <TopMovieList></TopMovieList>
      <View style={{ backgroundColor: "black" }}>
      <MovieList no={2} title={"İzlemeye Devam Et"}></MovieList>
      <MovieList no={3} prime={"Prime - "} title={"Önerilen Filmler"}></MovieList>
      <MovieList no={1} prime={"Prime - "} title={"Aksiyon ve Macera Filmleri"}></MovieList>
      <MovieList no={5} prime={"Prime - "} title={"Dram Filmleri"}></MovieList>
      <MovieList no={14} title={"İzlemeye Başlayın: Önerilenler"}></MovieList>
      <MovieList no={6} prime={"Prime - "} title={"Komedi Dizileri"}></MovieList>
      <MovieList no={7} title={"Türkiyede ilk 10"}></MovieList>
      <MovieList no={8} prime={"Prime - "} title={"Korku Filmleri"}></MovieList>
      <MovieList no={9} prime={"Prime - "} title={"James Bond Koleksiyonu"}></MovieList>
      <MovieList no={10} prime={"Prime - "} title={"Komedi Filmleri"}></MovieList>
      <MovieList no={11} prime={"Prime - "} title={"Drama Dizileri"}></MovieList>
      <MovieList no={12} prime={"Prime - "} title={"Prime Video'ya son eklenen diziler"}></MovieList>
      <MovieList no={4} prime={"Prime - "} title={"Aksiyon ve Macera TV İçerikleri"}></MovieList>
    </View>
    </ScrollView >
  );
}

