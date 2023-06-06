import React from "react";
import { FlatList, View } from "react-native";
import MovieList from "../../components/List/MovieList";
import TopMovieList from "../../components/List/TopMovieList";

export default function Home() {
  const movieLists = [
    { no: 2, title: "Continue Watching" },
    { no: 3, prime: "Prime - ", title: "Recommended Movies" },
    { no: 1, prime: "Prime - ", title: "Action & Adventure Movies" },
    { no: 4, prime: "Prime - ", title: "Stand Up Comedy" },
    { no: 5, prime: "Prime - ", title: "Drama Movies" },
    { no: 6, prime: "Prime - ", title: "Comedy Series" },
    { no: 7, title: "Türkiyede ilk 10" },
    { no: 8, prime: "Prime - ", title: "Horror Movies" },
    { no: 9, prime: "Prime - ", title: "James Bond Collection" },
    { no: 10, prime: "Prime - ", title: "Children and Family Movies" },
    { no: 11, prime: "Prime - ", title: "Documentary Movies" },
    { no: 12, prime: "Prime - ", title: "Romantic Movies" },
    { no: 13, title: "Start Watching: Recommended" },
  ];

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: "black" }}>
      <MovieList
        key={item.no.toString()}
        no={item.no}
        prime={item.prime}
        title={item.title}
      />
    </View>
  );

  return (
    <FlatList
      data={movieLists}
      renderItem={renderItem}
      keyExtractor={(item) => item.no.toString()}
      ListHeaderComponent={<TopMovieList />}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
}
