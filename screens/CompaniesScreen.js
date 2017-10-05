
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';
// import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { Button } from '../components/common';
import { fetchCompanies, getUserId } from '../actions';

class CompaniesScreen extends Component {
  
  onButtonPress() {
    // this.props.getUserId();
    // this.props.fetchCompanies();
  }
  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Companies',
    headerRight:
        <Button 
          title= "Edit Co"
          onPress={() => {
            navigation.navigate('companyEdit')} 
          }
        />
  }
} 
  render() {
    return (
      <View>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Button onPress={this.onButtonPress.bind(this)}>
          Send
        </Button>
        <Text>UserId= {this.props.userId}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log('SSSSSSSSSTTTTTTTTTTTATTTTTTTTTTTEEEEEEEE', state.auth.userId);
  return {
    userId: state.auth.userId
  }
}
export default connect(mapStateToProps, { fetchCompanies, getUserId })(CompaniesScreen);