
import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView, FlatList,Alert } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import DownloadedMovieCards from "../../components/DownloadedMovieCards"
import {useSelector,useDispatch} from "react-redux"
import axios from 'axios';




function Downloads({ navigation }) {
  const list = useSelector(s => s.movies);
  const dispatch = useDispatch();
 

  const removeMovieItems = item => {
    dispatch({type: 'REMOVE_FAVOURITE', payload: {movies: item}});
    Alert.alert("Remove Favorite!", "Successfuly...");
  };
  const renderItem = ({ item }) => (
    <View>
      <DownloadedMovieCards movieId={item.id} handlePress={() => handlePress(item)} onDelete={() => removeMovieItems(item)} isFavorite={true} />
    </View>
  );

  const handlePress = item => {
    navigation.navigate('Watching', { item });
  };
  return (
    <View style={styles.home_container}>
    <FlatList
    style={{margin:10,marginTop:0}}
      data={list}
      renderItem={renderItem}
      ListHeaderComponent={
        <View>
          <View style={{alignItems:"center"}}>
            <Text style={styles.title}>İzleme Listesi</Text>
          </View>
        <View style={styles.row_container}>
         {list && <Text style={styles.prime_text}>{list.length} Video </Text>}
          <Button text={"Filtrele"} theme={"fourth"} />
        </View></View>
      }
    />
  </View>
  );
}
export default Downloads;