
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { View, Text, ListView } from 'react-native';
import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
// import { Button } from '../components/common';
import * as actions from '../actions';

class CompaniesScreen extends Component {
  
  componentWillMount = () => {
    const companies = this.props.fetchCompanies(this.props.userId)
  }
  
  onButtonPress() {
    const companies =  this.props.fetchCompanies(this.props.userId).then((data) => {console.log('data',  data)});
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
    console.log('IN RENDER COMPANIES SCREEN companies =', this.props.companies);
    return (
      <View>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Text>CompaniesScreen</Text>
        <Button onPress={this.onButtonPress.bind(this)} title="Send"/>
        <Text>UserId= {this.props.userId}</Text>
      </View>
    )
  }
}



const mapStateToProps = state => {
  const companies = _.map(state.companies.companies, (val, id) => {
    return { ...val, id};
  });

  return {
    userId: state.auth.userId,
    companies
  }
}
export default connect(mapStateToProps, actions)(CompaniesScreen);