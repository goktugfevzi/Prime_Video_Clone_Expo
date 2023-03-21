import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    home_container:{
      flex:1,
      backgroundColor:'black',
    },
    row_container:{
      marginTop:10,
      marginBottom:-35,
        flexDirection:"row",
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2.5,
        resizeMode: 'stretch'
    },
    title:{
      fontSize:30,
      paddingLeft:10,
      fontWeight: '900',
      color: "#fff",
    },
    prime_text:{
      fontSize: 20,
      paddingLeft: 10,
      fontWeight: '900',
      color: "#808080",
    },
})