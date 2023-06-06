import * as React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./MovieList.style";
import useFetch from "../../../hooks/useFetch";
import MovieCards from "../../Cards/MovieCards";
import { useNavigation } from "@react-navigation/native";
import { MOVIELIST_API } from "../../../services/Contains";

export default MovieList = ({ no, title, prime }) => {
  const navigation = useNavigation();
  const api = MOVIELIST_API + no;
  const { loading, data, error } = useFetch(api);
  const renderJob = ({ item }) => (
    <MovieCards Item={item} handlePress={() => handlePress(item)} />
  );
  const handlePress = (item) => {
    navigation.navigate("Movie", { item });
  };
  if (loading) {
    return <ActivityIndicator size="large" color="#888888" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.prime_title}>
        {prime ? "Prime" : ""}
        <Text style={styles.title}>
          {prime ? " — " : ""}
          {title}
        </Text>
      </Text>
      <FlatList
        horizontal={true}
        data={data.results}
        renderItem={renderJob}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
