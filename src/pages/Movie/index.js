import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity ,Alert} from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { MoreOrLess } from "@rntext/more-or-less";
import {useDispatch} from "react-redux"
import { useNavigation } from '@react-navigation/native';
export default function Movie(props) {
  const navigation = useNavigation();


  const movie = props.route.params.item;

  const dispatch=useDispatch()
  const handleAdd = () => {
      dispatch({type: 'Add_Favorite', payload: {
          id:movie.id, title: movie.title, poster_path:movie.poster_path }});
      Alert.alert("Add Favorite!", "Successfuly...");    
  };
  const handlePress = item => {
    navigation.navigate('Watching', { item });
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path,
          }}
        />
      </View>
      <Text style={styles.title}>{movie.title}</Text>
      <Text
        style={styles.prime_text}>
        <Image style={{ width: 20, height: 20, resizeMode: "contain", }}
          source={require('../../../assets/check.png')} />
        {" "} Prime'a Dahil</Text>
      <View>
        <Button theme="primary" size={35} text={"Şimdi İzle"} icon={"play"} onPress={() => handlePress()}></Button>
        <Button theme="secondary" size={32} text={"İndir"} IconColor={"#fff"} icon={"download"} onPress={ handleAdd }></Button></View>
      <View style={{ flexDirection:"row"}}>
        <Button theme="tertiary" size={40} IconColor={"#fff"} icon={"play-circle-outline"} />
        <Button theme="tertiary" size={40} IconColor={"#fff"} icon={"plus"} />
        <Button theme="tertiary" size={40} IconColor={"#fff"} icon={"dots-vertical"} />
      </View>
      <View style={{ flexDirection:"row"}}>
        <Text style={{
          ...styles.prime_text,
          marginHorizontal: 26,
        }}>Fragman</Text>
        <Text style={{
          ...styles.prime_text,
          marginHorizontal: 16,
        }}>İzleme Listesi</Text>
        <Text style={{
          ...styles.prime_text,
          marginHorizontal: 14,
        }}>Daha Fazla</Text>
      </View>
      <View style={{ margin: 10,marginTop:20 }}>
        <MoreOrLess numberOfLines={3}  textButtonStyle={{ color: "#808080" }} animated textStyle={styles.prime_text}>
          {movie.overview}
        </MoreOrLess>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{...styles.prime_text,color:"#808080"}}>IMDb {movie.vote_average}</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{...styles.prime_text,color:"#808080"}}>Date {movie.release_date}</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{...styles.prime_text,color:"#808080"}}>Original language {movie.original_language}</Text>
      </View>
    </ScrollView>
  );
};
