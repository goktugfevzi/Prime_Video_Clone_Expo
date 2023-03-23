import {Dimensions, StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',  
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:'auto',
    marginRight:'auto'
  },
  title: {
    marginLeft: 5,
    fontWeight: '900',
    fontSize: 17,
    color:"#fff"
  },
});

export default {
  primary: StyleSheet.create({
      ...base_style,
    container: {
      margin: 10,
      ...base_style.container,
      backgroundColor: '#fff',
    },
    title: {
      ...base_style.title,
      color: 'black',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      margin: 10,
      ...base_style.container,
      backgroundColor: "#333333",
    },
    title: {
      ...base_style.title,
      color: '#fff',
    },
  }),
  sixth: StyleSheet.create({
    ...base_style,
    button_container: {
      marginTop:10,
      marginLeft:10,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    container: {
      ...base_style.container,
      alignItems: "flex-start",
      justifyContent:"flex-start",  
      alignItems:"flex-start",
      backgroundColor: "#1F1F1F",
    },
    title: {
      ...base_style.title,
      fontWeight:"500",
      color: '#fff',
    },
  }),
  tertiary: StyleSheet.create({
    ...base_style,
    container: {
      backgroundColor: 'black',
      borderColor: "black",
      marginHorizontal:38,
      borderWidth:1,
      width: Dimensions.get('window').width/7,
      ...base_style.container,
      justifyContent: "center",
      alignItems: "center",
    }, 
    title: {
      justifyContent: "center",
      alignItems: "center",
      ...base_style.title,
      color: '#00897b',
    },
  }),
  fourth: StyleSheet.create({
    ...base_style,
    container: {
      backgroundColor: '#333333',
      marginLeft:"auto",
      marginVertical:40,
      width: Dimensions.get('window').width/4.4,
      height: Dimensions.get('window').height/20,
      ...base_style.container,
      borderRadius:100,
      marginTop:-5,
      elevation: 3,
    }, 
    title: {
      alignItems:"center",
      justifyContent:"center",
      ...base_style.title,
      paddingRight:5,
      paddingBottom:2,
      color: '#fff',
    },
  }),
  fifth: StyleSheet.create({
    ...base_style,
    container: {
      backgroundColor: '#21252C',
      width: Dimensions.get('window').width/2.2,
      height: Dimensions.get('window').height/16,
      margin:2,
      ...base_style.container,
      borderRadius:5,
    }, 
    title: {
      alignItems:"center",
      justifyContent:"center",
      ...base_style.title,
      paddingRight:5,
      paddingBottom:2,
      color: '#fff',
    },
  }),
};
