import React, { useState } from "react";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import styles from "./styles";
import Button from "../../components/Button/Button";
import { MoreOrLess } from "@rntext/more-or-less";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Add_WatchList } from "../../context/watchSlice";
import { Add_DownloadList } from "../../context/downloadSlice";
import { POSTER_DOMAIN } from "@env";
import Notification from "../../components/Notification";

export default function Movie(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const navigation = useNavigation();
  const movie = props.route.params.item;

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(Add_DownloadList(movie));
    Notification("Info!", "Movie Has Been Downloaded", "success");
    setIsDownloaded(true);
  };

  const handleAddWatchList = () => {
    dispatch(Add_WatchList(movie));
    Notification("Info!", "Movie Has Been Added To Watch List", "success");
    setIsAdded(true);
  };
  const handlePress = (item) => {
    navigation.navigate("Watching", { item });
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground
          style={styles.image}
          source={{
            uri: POSTER_DOMAIN + movie.backdrop_path,
          }}
        >
          <LinearGradient
            colors={["#00000000", "#000000"]}
            style={styles.linearGradient}
          ></LinearGradient>
        </ImageBackground>
      </View>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.prime_text}>
        <Image
          style={styles.image_second}
          source={require("../../../assets/check.png")}
        ></Image>{" "}
        Prime'a Dahil
      </Text>
      <View>
        <Button
          theme="primary"
          size={35}
          text={"Watch Now"}
          icon={"play"}
          onPress={() => handlePress()}
        ></Button>
        <Button
          theme="secondary"
          size={32}
          text={isDownloaded ? "I Love Kebab" : "Download"}
          IconColor={"#fff"}
          icon={isDownloaded ? "check" : "download"}
          onPress={handleAdd}
        ></Button>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button
          theme="tertiary"
          size={40}
          IconColor={"#fff"}
          icon={"play-circle-outline"}
        />
        <Button
          theme="tertiary"
          size={40}
          IconColor={"#fff"}
          onPress={() => handleAddWatchList()}
          icon={isAdded ? "check" : "plus"}
        />
        <Button
          theme="tertiary"
          size={40}
          IconColor={"#fff"}
          icon={"dots-vertical"}
        />
      </View>
      <View style={styles.container_second}>
        <Text
          style={{
            ...styles.prime_text,
          }}
        >
          Trailer
        </Text>
        <Text
          style={{
            ...styles.prime_text,
          }}
        >
          Watch List
        </Text>
        <Text
          style={{
            ...styles.prime_text,
          }}
        >
          More{" "}
        </Text>
      </View>
      <View style={{ margin: 10, marginTop: 20 }}>
        <MoreOrLess
          numberOfLines={3}
          textButtonStyle={{ color: "#808080" }}
          animated
          textStyle={styles.prime_text}
        >
          {movie.overview}
        </MoreOrLess>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.imdbText}>
          IMDb {movie.vote_average}
        </Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.imdbText}>
          Year {movie.release_date.slice(0, 4)}
        </Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.imdbText}>
          Original language {movie.original_language.toUpperCase()}
        </Text>
      </View>
    </ScrollView>
  );
}
