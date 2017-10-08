
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, ListView } from 'react-native';
// import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { Button } from '../components/common';
import * as actions from '../actions';

class CompaniesScreen extends Component {
  
  componentWillMount = () => {
    console.log('THISPROPS USERID', this.props.userId);
    const companies = this.props.fetchCompanies(this.props.userId)
    .then((data) =>{console.log('componentWillMount CompaniesScreen companies = ', this.props.companies) })
    // console.log('Companies Screen ComponentWIllMount companies', companies);
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
  return {
    userId: state.auth.userId,
    companies: state.companies.companies
  }
}
export default connect(mapStateToProps, actions)(CompaniesScreen);