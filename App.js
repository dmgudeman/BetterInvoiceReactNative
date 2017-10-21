import React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';

import store from './store';
import AuthScreen from './screens/AuthScreen';
// import WelcomeScreen from './screens/WelcomeScreen';
import CompanyEditScreen from './screens/CompanyEditScreen';
import CompaniesScreen from './screens/CompaniesScreen';
import ItemEditScreen from './screens/ItemEditScreen';
import ListItem from './components/ListItem';
import TestScreen from './screens/TestScreen';

export const MainNavigator = StackNavigator({ 
  auth: { screen: AuthScreen },
  companies: {screen: CompaniesScreen },
  companyEdit: { screen: CompanyEditScreen },
  itemEdit: { screen: ItemEditScreen },
  ListItem: { screen: ListItem },
          
  //   })
  // }
}, {
  lazy: false
});

export const ChildNavigator = StackNavigator({
   
    itemEdit: { screen: ItemEditScreen}

})
export default class App extends React.Component {
  state = { loggedIn: null };
  
    componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyAfldBZz7sGRngB3p1GKgRTHxsEzT5rHGo",
        authDomain: "better-invoice-firebase.firebaseapp.com",
        databaseURL: "https://better-invoice-firebase.firebaseio.com",
        projectId: "better-invoice-firebase",
        storageBucket: "better-invoice-firebase.appspot.com",
        messagingSenderId: "1016088883434"
      });
  
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    
    }
  
  render() {
    
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
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
