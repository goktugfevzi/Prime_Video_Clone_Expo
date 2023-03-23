import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";

import ProfilePage from '../../pages/Profile';
import WatchingPage from '../../pages/Watching';
import SettingsPage from '../../pages/Settings';
import ProfileButton from '../../components/ProfileButton';

const Stack = createNativeStackNavigator();


export default ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Profile" component={ProfilePage} options={{
        headerTitle: () => <View style={{flexDirection:"row",marginLeft:-20}}>
          <ProfileButton/>
          <View>
          <Text style={{color:"#fff",fontSize:17}}>Goktug Fevzi Ozcelik</Text>
          <TouchableOpacity  onPress={()=>console.log("Profilleri değiştir")}>
        <Text style={{color:"#fff",fontSize:14}}>Change Profiles</Text>
      </TouchableOpacity>
          </View>
          </View>,
          headerRight: ()=><TouchableOpacity onPress={()=>navigation.navigate("Settings")}><Feather name='settings' size={35} color={"#888888"}></Feather></TouchableOpacity>,
          headerBackVisible:false
      }} />
      <Stack.Screen name="Watching" component={WatchingPage} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsPage}
       options={{
           headerTitle: () =>
           <Text style={{color:'#fff',fontSize:22 ,fontWeight:"900"}}>Settings</Text>
           , headerBackVisible:false}} />
          
    </Stack.Navigator>
  );
}