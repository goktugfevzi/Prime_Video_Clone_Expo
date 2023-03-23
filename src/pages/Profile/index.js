
import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import WatchListCards from "../../components/Cards/WatchListCards"
import { useSelector, useDispatch } from "react-redux"
import { Remove_WatchList } from '../../context/watchSlice';
import Notification from '../../components/Notification';
function Downloads({ navigation }) {
  const lists = useSelector(state => state.watch);
  const list = lists.watchList;
  console.log(lists);


  const dispatch = useDispatch();
  const removeMovieItems = item => {
    dispatch(Remove_WatchList(item));
    Notification("Info!", "Movie Has Been Removed From Watch List ", "info");

  };
  const renderItem = ({ item }) => (
    <View>
      <WatchListCards movieId={item.id} handlePress={() => handlePress(item)} onDelete={() => removeMovieItems(item)} isFavorite={true} />
    </View>
  );

  const handlePress = item => {
    navigation.navigate('Watching', { item });
  };
  return (
    <View style={styles.home_container}>
      <FlatList
        style={{ margin: 10, marginTop: 0 }}
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Watch List</Text>
            </View>
            <View style={styles.row_container}>
            {list && list.length > 0 && <Text style={styles.prime_text}>{list.length} Video </Text>}
              <Button text={"Filter"} theme={"fourth"} />
            </View></View>
        }
      />
    </View>
  );
}
export default Downloads;