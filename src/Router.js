import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Entypo, Feather, } from "@expo/vector-icons";
import DownloadPage from "./pages/Downloads";
import FindPage from "./pages/Find";
import HomePage from "./pages/Home";
import WatchingPage from './pages/Watching';
import MoviePage from './pages/Movie';
import ProfilePage from './pages/Profile';
import reducers from './context/reducers';
import store from './context/store';
import { createStore } from "redux";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import SettingsPage from './pages/Settings';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, secondaryContainer: "black", }, };

//HEADER IMAGE CODES
function LogoTitle() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View>
      <Image
      style={{ width: 80, height: 25, resizeMode: "center" }}
      source={require('../assets/logo_white.png')}
      onPress={()=> navigation.navigate("Home")}
    />
      </View>
    </TouchableOpacity>
    
  );
}


function ProfileButton() {
  const navigation = useNavigation();
  return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileStack")}>
        <View >
          <Image style={{  width: 80, height: 40, resizeMode: "contain" ,marginRight:-15 }}
            source={require('../assets/profile-img.png')} />
        </View>
      </TouchableOpacity>
  );
}
//HEADER IMAGE CODES


const ProfileStack = () => {
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
        <Text style={{color:"#fff",fontSize:14}}>Profilleri değiştir</Text>
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
           <Text style={{color:'#fff',fontSize:22 ,fontWeight:"900"}}>Ayarlar</Text>
           , headerBackVisible:false}} />
          
    </Stack.Navigator>
  );
}

const HomeStack = () => {
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
           <Text></Text> ,
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
const DownloadStack = () => {
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
          headerLeft: () => <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>İndirilenler</Text>,
          headerTitle: () =>
          <Text></Text> ,
          headerRight: () => (
            <ProfileButton />
          ),
        }} />
      <Stack.Screen name="Movie" component={MoviePage} options={{ headerShown: false }} />
      <Stack.Screen name="Watching" component={WatchingPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
    </Stack.Navigator>)
}
const FindStack = () => {
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
          headerLeft: () => <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>Bul</Text>,
          headerTitle: () =>
          <Text></Text> ,
          headerRight: () => (
            <ProfileButton />
          ),
        }} />
      <Stack.Screen name="Movie" component={MoviePage} options={{ headerShown: false }} />
      <Stack.Screen name="Watching" component={WatchingPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
    </Stack.Navigator>)
}
export default function Router() {
  return (
    <Provider store={createStore(reducers,store)}>
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Tab.Navigator
          shifting={true}
          barStyle={{ backgroundColor: "black" }}
          activeColor="#f0edf6"
          inactiveColor="#333333"
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: 'Anasayfa',
              tabBarIcon: ({ focused }) => {
                return (
                  <MaterialCommunityIcons
                    name="home-outline"
                    size={focused ? 30 : 28}
                    color={focused ? "#ffffff" : "#8c8377"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="DownloadStack"
            component={DownloadStack}
            options={{
              tabBarLabel: 'İndirilenler',
              tabBarIcon: ({ focused }) => {
                return (
                  <Feather
                    size={focused ? 30 : 28}
                    name="download"
                    backgroundColor='transparent'
                    color={focused ? "#ffffff" : "#8c8377"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="FindStack"
            component={FindStack}
            options={{
              tabBarLabel: 'Bul',
              tabBarIcon: ({ focused }) => {
                return (
                  <Entypo
                    name="magnifying-glass"
                    size={focused ? 30 : 28}
                    backgroundColor='transparent'
                    color={focused ? "#ffffff" : "#8c8377"}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
    </Provider>
  );
}