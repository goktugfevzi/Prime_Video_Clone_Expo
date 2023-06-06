import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./SettingsCards.style";
import { Switch } from "react-native-paper";
export default SettingsCards = ({ title, info, keys }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{ backgroundColor: "black" }}>
      <TouchableOpacity
        style={{ marginVertical: 10, ...styles.container }}
        onPress={() => {
          keys ? onToggleSwitch() : console.log("first");
        }}
      >
        <View style={styles.text_container}>
          <Text style={styles.prime_title}>{title}</Text>
          <Text style={styles.minutes_text}>{info}</Text>
        </View>
        {keys ? (
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        ) : null}
      </TouchableOpacity>
      <View style={styles.hr}></View>
    </View>
  );
};
