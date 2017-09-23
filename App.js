import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import CompanyEditScreen from './screens/CompanyEditScreen';
import CompaniesScreen from './screens/CompaniesScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({ 
      welcome: { screen: WelcomeScreen},
      auth: { screen: AuthScreen },
      companies: {
        screen: StackNavigator({
        companies: {screen: CompaniesScreen },
        companyEdit: { screen: CompanyEditScreen }
        })
      }
    });

    return (
        <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
