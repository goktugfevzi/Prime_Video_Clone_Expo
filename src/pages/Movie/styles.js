import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.5,
    resizeMode: "stretch",
  },
  image_second: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
  },
  container_second: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: "900",
    color: "#fff",
  },
  prime_text: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "900",
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  imdbText: {
    color: "#808080",
    marginHorizontal: 10,
  }
});
