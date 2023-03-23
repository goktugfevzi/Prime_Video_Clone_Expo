import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function SearchBar({ fetchData } ) {
  const [input, setInput] = useState("");
  const [searchTimer, setSearchTimer] = useState(null);

  return (
    <View style={{margin: 8}}>
      <Searchbar
        selectionColor="blue"
        placeholder="Search by movie, title..."
        placeholderTextColor="#3e3e3e"
        onChangeText={(text) => {
          if (searchTimer) {
            clearTimeout(searchTimer);
          }
          setInput(text);
          setSearchTimer(
            setTimeout(() => {
              fetchData(text);
            }, 600),
          );
        }}
        value={input}
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
        }}
        inputStyle={{
          fontSize: 17,
          color: 'black',
        }}
        iconColor="#888888"
      />
    </View>
  );
}