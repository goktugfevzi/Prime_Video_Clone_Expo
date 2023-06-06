import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import styles from "./styles";
import Button from "../../components/Button/Button";
import DownloadedMovieCards from "../../components/Cards/DownloadedMovieCards";
import { useSelector, useDispatch } from "react-redux";
import { Remove_DownloadList } from "../../context/downloadSlice";
import Notification from "../../components/Notification";
import axios from "axios";
import { MOVIE_DOMAIN, API_KEY, LANGUAGE_DOMAIN } from "@env";

const calculateTotalDuration = async (list) => {
  let time = 0;

  for (let i = 0; i < list.length; i++) {
    const movie = list[i];
    const response = await axios.get(
      MOVIE_DOMAIN + movie.id + API_KEY + LANGUAGE_DOMAIN
    );
    const { runtime } = response.data;
    time += runtime;
  }

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours} Hrs ${minutes} Min`;
};

function Downloads({ navigation }) {
  const lists = useSelector((state) => state.download);
  const list = lists.downloadList;
  const [totalDuration, setTotalDuration] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getTotalDuration = async () => {
      const duration = await calculateTotalDuration(list);
      setTotalDuration(duration);
    };
    getTotalDuration();
  }, [list]);

  const removeMovieItems = (item) => {
    dispatch(Remove_DownloadList(item));
    Notification("Info!", "Movie Has Been Removed", "info");
  };
  const renderItem = ({ item }) => (
    <View>
      <DownloadedMovieCards
        movieId={item.id}
        handlePress={() => handlePress(item)}
        onDelete={() => removeMovieItems(item)}
        isFavorite={true}
      />
    </View>
  );

  const handlePress = (item) => {
    navigation.navigate("Watching", { item });
  };
  return (
    <View style={styles.home_container}>
      <FlatList
        style={styles.flatlist_container}
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.row_container}>
            {list && (
              <Text style={styles.prime_text}>
                {list.length} Video {totalDuration}{" "}
              </Text>
            )}
            <Button text={"Edit"} theme={"fourth"} />
          </View>
        }
      />
    </View>
  );
}
export default Downloads;
