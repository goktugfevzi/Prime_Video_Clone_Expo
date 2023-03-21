import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:"black",
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
      fontSize: 16,
      paddingLeft: 10,
      fontWeight: '900',
      color: "#fff",
    },
})