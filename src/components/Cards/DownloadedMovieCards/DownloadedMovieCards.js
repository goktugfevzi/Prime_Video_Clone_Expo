import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import styles from "./DownloadedMovieCards.style";
import useFetch from '../../../hooks/useFetch';
import { BottomSheet } from 'react-native-btr';
import Button from '../../Button/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_KEY,MOVIE_DOMAIN,POSTER_DOMAIN} from "@env";

const DownloadedMovieCards = ({ movieId, handlePress, onDelete }) => {

  //BOTTOMSHEET
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  //BOTTOMSHEET

  //API
  const api = MOVIE_DOMAIN + movieId + API_KEY
  const { loading, data, error } = useFetch(api);
  if (loading) {
    return <ActivityIndicator size="large" color="#888888" />
  }

  return (
    <ScrollView>
      <TouchableOpacity style={styles.container} onPress={handlePress} >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: POSTER_DOMAIN + data.poster_path,
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
                  <View style={{ flexDirection: "row", marginTop: -15 }}>
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
                  <Button icon={"play"} onPress={handlePress} IconColor={"#fff"} text={"Play Downloaded Video"} theme={"sixth"}></Button>
                  <Button icon={"delete"} onPress={onDelete} IconColor={"#fff"} text={"Delete Downloaded Video"} theme={"sixth"}></Button>
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

