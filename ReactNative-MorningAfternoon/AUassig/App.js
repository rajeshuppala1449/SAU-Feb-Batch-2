/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import TopRated from './src/Components/Menus/TopRated'
import { NavigationContainer } from '@react-navigation/native';
import Card from './src/Components/Card';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from './src/Components/Menus/TabNavigator';




const App = () => {
  return (

    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>

  );
};


export default App;
