import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        
        flexDirection: 'row',
    },
    text_container:{
        flexDirection: "column",
    },
    prime_title: {
        fontSize: 20,
        fontWeight: '900',
        color: "#fff",
    },
    minutes_text: {
        flex:1,
        alignItems:'flex-end',
        marginRight:"auto",
        fontSize: 20,
        fontWeight: '900',
        marginHorizontal:10,
        color: "#888888",
    }
})