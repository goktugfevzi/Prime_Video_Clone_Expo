import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 50,
  },
  text_container: {
    flexDirection: "column",
  },
  prime_title: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
  minutes_text: {
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 10,
    color: "#888888",
  },
  hr: { height: 1, width: "100%", backgroundColor: "#4D4D4D" },
});
