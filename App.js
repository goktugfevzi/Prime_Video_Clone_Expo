import { StatusBar } from 'expo-status-bar';
import Router from "./src/Router";

import FlashMessage from "react-native-flash-message";
//REDUX
import { Provider } from "react-redux";
import store from "./src/context/store";
//REDUX

export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <StatusBar style="light" translucent={false} />
      <FlashMessage position="top" />
    </Provider>
  );
}
