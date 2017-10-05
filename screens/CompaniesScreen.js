
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';
// import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { Button } from '../components/common';
import { fetchCompanies } from '../actions';

const userId ='';
class CompaniesScreen extends Component {
  
  onButtonPress() {
    console.log('HHHHHHHHHHHHIIIIIIIIIIIII');
    this.props.fetchCompanies();
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
        <Text>{this.props.userId}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.companies.userId
  }
}
export default connect(mapStateToProps, { fetchCompanies })(CompaniesScreen);