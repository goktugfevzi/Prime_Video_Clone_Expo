
import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView, FlatList,Alert } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import DownloadedMovieCards from "../../components/DownloadedMovieCards"
import {useSelector,useDispatch} from "react-redux"
import axios from 'axios';


const calculateTotalDuration = async (list) => {
  let time = 0;

  for (let i = 0; i < list.length; i++) {
    const movie = list[i];
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=d3c011b374dea8dfa4c195b50b62af15&language=en-US`);
    const { runtime } = response.data;
    time += runtime;
  }

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours} sa ${minutes} dk`;
};

function Downloads({ navigation }) {
  const list = useSelector(s => s.movies);
  const [totalDuration, setTotalDuration] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const getTotalDuration = async () => {
      const duration = await calculateTotalDuration(list);
      setTotalDuration(duration);
    };
    getTotalDuration();
  }, [list]);

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
        <View style={styles.row_container}>
         {list && <Text style={styles.prime_text}>{list.length} video  {totalDuration}  </Text>}
          <Button text={"Düzenle"} theme={"fourth"} />
        </View>
      }
    />
  </View>
  );
}
export default Downloads;