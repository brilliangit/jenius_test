/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// Redux State management
import { Provider } from 'react-redux';
import configureStore from './src/services/store';
const store = configureStore();
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// Screen
import HomeScreen from './src/screens/homeScreen';
import DetailScreen from './src/screens/detailScreen';
import Headers from './src/components/header'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Contact"
            component={HomeScreen}
            options={{ header: props => <Headers {...props} /> }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Tambah" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
