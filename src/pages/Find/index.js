import React, { useState } from "react";
import { View, FlatList, SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import FoundMovieCards from "../../components/Cards/FoundMovieCards";
import SearchBar from "../../components/SearchBar";

import { SEARCH_DOMAIN, API_KEY } from "@env";
export default function Find({ navigation }) {
  const [data, setData] = useState([]);

  async function fetchData(text) {
    const res = await fetch(
      SEARCH_DOMAIN + API_KEY + `&query=${text}`,
    );
    res
      .json()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }
  const renderJob = ({ item }) => <FoundMovieCards Item={item} handlePress={() => handlePress(item)} />
  const handlePress = item => {
    navigation.navigate('Movie', { item });
  };
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#333333',
        height: 0.5,
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        fetchData={fetchData}
      />
      {data && data.results && data.results.length > 0 ? (
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={data.results}
          renderItem={renderJob}
        />
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={styles.prime_text}>Genres</Text>
          <View style={styles.buttonRow}>
            <Button theme="fifth" text={"Action"} />
            <Button theme="fifth" text={"Anime"} />
          </View>
          <View style={styles.buttonRow}>
            <Button theme="fifth" text={"Comedy"} />
            <Button theme="fifth" text={"Documentary "} />
          </View>
          <View style={styles.buttonRow}>
            <Button theme="fifth" text={"Drama"} />
            <Button theme="fifth" text={"Fantastic"} />
          </View>
          <Button text={"See More"} theme={"secondary"}></Button>
        </View>
      )}
    </SafeAreaView>
  );
}

