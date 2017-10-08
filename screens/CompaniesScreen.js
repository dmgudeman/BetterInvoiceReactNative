
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import { View, Text, ListView } from 'react-native';
// import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { Button, Card, CardSection } from '../components/common';
import { fetchCompanies, getUserId } from '../actions';
import { Sparky } from '../components/Sparky';

class CompaniesScreen extends Component {
  componentWillMount() {
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // })
    console.log('THISPROPS USERID', this.props.userId);
<<<<<<< HEAD
    // const x = this.props.fetchCompanies(this.props.userId);
    console.log('caommmpannnieees', this.props.companies);
    // this.dataSource = ds.cloneWithRows(this.props.companies);
=======
    const companies =  this.props.fetchCompanies(this.props.userId); 
    console.log('Companies Screen ComponentWIllMount companies', this.props.companies);
>>>>>>> sat
  }

  
  onButtonPress() {
    const companies =  this.props.fetchCompanies(this.props.userId);
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
  renderRow(company) {
    return <ListItem company={company} />

  }
  render() {
    return (
    //  <ListView
    //    dataSource={this.dataSource}
    //    renderRow={this.renderRow}
    //  />
    <View>
        <Text>The Dog</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
<<<<<<< HEAD
  console.log('SSSSSSSSSTTTTTTTTTTTATTTTTTTTTTTEEEEEEEE', state);
  return {
    userId: state.auth.userId,
    // companies: state.CompaniesReducer.companies
=======
  return {
    userId: state.auth.userId,
    companies: state.companies.companies
>>>>>>> sat
  }
}
export default connect(mapStateToProps, { fetchCompanies })(CompaniesScreen);