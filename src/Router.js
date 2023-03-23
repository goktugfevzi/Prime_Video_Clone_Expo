import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Entypo, Feather, } from "@expo/vector-icons";
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import HomeStack from './navigator/HomeStack';
import DownloadStack from './navigator/DownloadStack';
import FindStack from './navigator/FindStack';

const Tab = createMaterialBottomTabNavigator();
const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, secondaryContainer: "black", }, };

export default function Router() {
  return (
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
              tabBarLabel: 'Home',
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
              tabBarLabel: 'Downloads',
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
              tabBarLabel: 'Find',
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
  );
}