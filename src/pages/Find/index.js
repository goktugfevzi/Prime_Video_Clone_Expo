import React, { useState } from "react";
import { View, FlatList, SafeAreaView, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import FoundMovieCards from "../../components/FoundMovieCards";
import styles from "./styles";
import Button from "../../components/Button";
export default function Find({ navigation }) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);

  async function fetchData(text) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d3c011b374dea8dfa4c195b50b62af15&query=${text}`,
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
      <Searchbar
        selectionColor="blue"
        placeholder="Filme, başlığa... göre arama"
        placeholderTextColor="#3e3e3e"
        onChangeText={(text) => {
          if (searchTimer) {
            clearTimeout(searchTimer);
          }
          setInput(text);
          setSearchTimer(
            setTimeout(() => {
              fetchData(text);
            }, 1000),
          );
        }}
        value={input}
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          margin: 8,
        }}
        inputStyle={{
          fontSize: 17,
          color: 'black',
        }}
        iconColor="#888888"
      />
      {data && data.results && data.results.length > 0 ? (
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={data.results}
          renderItem={renderJob}
        />
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={styles.prime_text}>Türler</Text>
        <View style={styles.buttonRow}>
            <Button theme="fifth" text={"Aksiyon ve macera"} />
            <Button theme="fifth" text={"Anime"} />
            </View> 
            <View style={styles.buttonRow}>
            <Button theme="fifth" text={"Komedi"} />
            <Button theme="fifth" text={"Belgesel"} />
              </View>
               <View style={styles.buttonRow}>
            <Button theme="fifth" text={"Dram"} />
            <Button theme="fifth" text={"Fantastik"} />
          </View>
          <Button text={"Daha Fazla Gör"} theme={"secondary"}></Button>
          </View>
      )}
    </SafeAreaView>
  );
}

