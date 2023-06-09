import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import useFetch from "../../../hooks/useFetch";
import TopMovieCards from "../../Cards/TopMovieCards";
import { useNavigation } from "@react-navigation/native";
import { MOVIELIST_API } from "../../../services/Contains";

export default TopMovieList = () => {
  const navigation = useNavigation();
  const api = MOVIELIST_API + "13";
  const { loading, data, error } = useFetch(api);
  const topRenderJob = ({ item }) => (
    <TopMovieCards Item={item} handlePress={() => handlePress(item)} />
  );
  const handlePress = (item) => {
    navigation.navigate("Movie", { item });
  };
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={data.results}
        renderItem={topRenderJob}
      />
    </View>
  );
};
