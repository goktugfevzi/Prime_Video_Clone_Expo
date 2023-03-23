import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "../../pages/Home";
import WatchingPage from '../../pages/Watching';
import MoviePage from '../../pages/Movie';
import LogoTitle from '../../components/LogoTitle';
import ProfileButton from '../../components/ProfileButton';
import ProfileStack from '../ProfileStack';

const Stack = createNativeStackNavigator();


export default HomeStack = () => {
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
      <Stack.Screen name="Home" component={HomePage}
        options={{
          headerLeft: (props) =>
            <LogoTitle {...props} />,
          headerTitle: () =>
            <Text></Text>,
          headerRight: () => (
            <ProfileButton />
          ),
        }} />
      <Stack.Screen name="Movie" component={MoviePage} options={{ headerShown: false }} />
      <Stack.Screen name="Watching" component={WatchingPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}