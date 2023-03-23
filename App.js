import { StatusBar } from 'expo-status-bar';
import Router from "./src/Router";

import FlashMessage from "react-native-flash-message";
//REDUX
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './src/context/reducers'
const store = configureStore({
  reducer: rootReducer
})
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
