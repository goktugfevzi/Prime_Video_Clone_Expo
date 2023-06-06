import React from "react";
import { View } from "react-native";
import { Video } from "expo-av";
import styles from "./styles";
export default function Watching({ props }) {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        resizeMode="contain"
        source={require("../../../assets/video.mp4")}
        useNativeControls={true}
        isLooping={true}
      />
    </View>
  );
}
