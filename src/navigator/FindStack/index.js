import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindPage from "../../pages/Find";
import WatchingPage from '../../pages/Watching';
import MoviePage from '../../pages/Movie';
import ProfileButton from '../../components/ProfileButton';
import ProfileStack from '../ProfileStack';
import styles from "./styles";

const Stack = createNativeStackNavigator();


export default FindStack = () => {
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
      }}
    >
      <Stack.Screen name="Find" component={FindPage}
        options={{
          headerLeft: () => <Text style={styles.headerLeft_text}>Find</Text>,
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