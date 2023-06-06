import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    marginVertical: 2,
    flexDirection: "row",
  },
  bottomNavigationView: {
    backgroundColor: "#1F1F1F",
    width: "100%",
    height: 250,
  },
  bottom_Text: {
    color: "#555555",
    justifyContent: "flex-start",
    textAlign: "left",
    paddingLeft: 20,
    fontSize: 17,
  },
  image: {
    borderRadius: 5,
    width: Dimensions.get("window").width / 2,
    height: 110,
    resizeMode: "stretch",
  },
  prime_title: {
    width: "55.5%",
    paddingLeft: 10,
    fontSize: 17,
    fontWeight: "900",
    color: "#fff",
  },
  Button: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  minutes_text: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: "auto",
    fontSize: 20,
    fontWeight: "900",
    marginHorizontal: 10,
    color: "#888888",
  },
  bottom_Title: {
    color: "#fff",
    justifyContent: "flex-start",
    textAlign: "left",
    padding: 20,
    fontWeight: "900",
    fontSize: 20,
  },
});
