import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        margin: 10,
        marginVertical: 5,
        
    },
    image: {
        width: Dimensions.get('window').width/3,
        height: 120,
        marginHorizontal: 10,
        resizeMode: 'center'
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: '900',
        color: "#fff",
    },
    prime_title: {
        flex: 1,
        fontSize: 20,
        fontWeight: '900',
        color: "#1993f7",
    }
})