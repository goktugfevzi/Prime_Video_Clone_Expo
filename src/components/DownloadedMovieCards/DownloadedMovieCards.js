import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView, ActivityIndicator,Alert
} from 'react-native';
import styles from "./DownloadedMovieCards.style";
import useFetch from '../../hooks/useFetch';
import { BottomSheet } from 'react-native-btr';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Button';
const DownloadedMovieCards = ({ movieId, handlePress,onDelete }) => {


  //BOTTOMSHEET ICIN
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  //BOTTOMSHEET ICIN

  //API
  const api = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=d3c011b374dea8dfa4c195b50b62af15"
  const { loading, data, error } = useFetch(api);
  if (loading) {
    return <ActivityIndicator size="large" color="#888888" />
  }
  if (error) {
    return console.log(error);
  }

  return (
    <ScrollView>
      <TouchableOpacity style={styles.container} onPress={handlePress} >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w500/" + data.poster_path,
            }}
          />
          <View>
            <View style={styles.container}>
              <Text style={styles.prime_title}>{data.title}</Text>
              <TouchableOpacity
                style={styles.Button}
                onPress={toggleBottomNavigationView}>
                <Icon name={"dots-vertical"} color={"#fff"} size={30} />
              </TouchableOpacity>
              <BottomSheet
                visible={visible}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
              >
                <View style={styles.bottomNavigationView}>
                  <Text
                    style={{
                      color: "#fff",
                      justifyContent: "flex-start",
                      textAlign: "left",
                      padding: 20,
                      fontWeight: "900",
                      fontSize: 20,
                    }}>
                    {data.title}
                  </Text>
                  <View style={{ flexDirection: "row" ,marginTop:-15}}>
                    {data.release_date &&
                      <Text
                        style={{
                          ...styles.bottom_Text,
                          paddingRight: 20,
                        }}>
                        {data.release_date.substring(0, 4)}
                      </Text>}
                      {data.vote_average &&
                    <Text
                      style={{
                        ...styles.bottom_Text,
                        paddingLeft: 10,

                      }}>
                      IMBD {data.vote_average.toFixed(1)}
                    </Text>}
                    {data.adult ? <Icon name='masks' color={"#555555"} size={40} /> : <Icon style={{ marginLeft: 20, marginTop: -9 }} name='baby-face-outline' color={"#555555"} size={40} />}
                  </View>
                  {data.original_language &&
                  <Text
                    style={{
                      ...styles.bottom_Text,
                      paddingLeft: 20,
                    }}>
                    Audio Language: {data.original_language.toUpperCase()}
                  </Text>}
                  <Button icon={"play"}  onPress={handlePress} IconColor={"#fff"} text={"İndirilen videoyu oynat"} theme={"sixth"}></Button>
                  <Button icon={"delete"} onPress={onDelete} IconColor={"#fff"} text={"İndirilen videoyu sil"} theme={"sixth"}></Button>
                </View>
              </BottomSheet>
            </View>
            <Text style={styles.minutes_text}>{data.runtime} dk  </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView >
  );
};

export default DownloadedMovieCards;

