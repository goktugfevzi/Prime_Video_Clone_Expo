import { StyleSheet,Dimensions } from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    alignSelf: 'center',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height/1.3,
  },
});