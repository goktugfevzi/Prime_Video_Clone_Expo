import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginRight:10,
        flexDirection: 'row',
    },
    image: {
        borderRadius:10,
        width: Dimensions.get('window').width/2,
        height: 120,
        resizeMode: 'stretch'
    },
  
})