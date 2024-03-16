import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigator/AuthStack';
import AppStack from './src/navigator/AppStack';
import {COLORS} from './src/constants';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import axios from 'axios';
import reduxStore from './src/redux/store';
import constants from './src/redux/constants';
import Toast from 'react-native-toast-message';
const {BASE_URL} = constants;

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {
  const Stack = createNativeStackNavigator();
  const setUrlConfig = () => {
    console.log('called setUrlConfig');
    axios.defaults.baseURL = BASE_URL;
  };
  useEffect(() => {
    setUrlConfig();
  });

  return (
    <>
      <Provider store={reduxStore}>
        <PersistGate persistor={reduxPersistStore}>
          <NavigationContainer>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <Stack.Navigator
              initialRouteName="Auth"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Auth" component={AuthStack} />
              <Stack.Screen name="Main" component={AppStack} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
        <Toast />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
