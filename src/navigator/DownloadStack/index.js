import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DownloadPage from "../../pages/Downloads";
import WatchingPage from '../../pages/Watching';
import MoviePage from '../../pages/Movie';
import ProfileButton from '../../components/ProfileButton';
import ProfileStack from '../ProfileStack';

const Stack = createNativeStackNavigator();

export default DownloadStack = () => {
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
      <Stack.Screen name="Download" component={DownloadPage}
        options={{
          headerLeft: () => <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>Downloads</Text>,
          headerTitle: () =>
            <Text></Text>,
          headerRight: () => (
            <ProfileButton />
          ),
        }} />
      <Stack.Screen name="Movie" component={MoviePage} options={{ headerShown: false }} />
      <Stack.Screen name="Watching" component={WatchingPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
    </Stack.Navigator>)
}