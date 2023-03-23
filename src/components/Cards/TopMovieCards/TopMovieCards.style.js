import { StyleSheet ,Dimensions} from 'react-native'

export default StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        resizeMode:"stretch",
        width: Dimensions.get('window').width/1,
        height: Dimensions.get('window').height/3.5,
    },
})