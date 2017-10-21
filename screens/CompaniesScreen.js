
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { View, Text, ListView, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
// import { Button } from '../components/common';
import * as actions from '../actions';
import ListItem from '../components/ListItem'
import { MainNavigator } from '../App';


class CompaniesScreen extends Component {
  navigator 
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.fetchCompanies(this.props.userId)
    // this.props.fetchCompanies('1929587090588927')
    // console.log('CompaniesScreen componentWillMount this.props.userId', this.props.userId);
    console.log('CompaniesScreen componentWillMount this.props', this.props);
    console.log('CompaniesScreen componentWillMount state ', this.state);
    // this.createDataSource(this.props);
    
  }
  componentDidMount() {
    this.props.fetchCompanies(this.props.userId)
    // this.props.fetchCompanies('1929587090588927')
    // console.log('CompaniesScreen componentWillMount this.props.userId', this.props.userId);
    console.log('CompaniesScreen componentWillMount this.props', this.props);
    this.navigator = this.props.navigation;
    console.log('CompaniesScreen componenWillMount this.navigator', this.navigator);
  //  this.createDataSource(this.props);
    
  }
  
 
  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Companies',
    headerRight:
        <Button
          title= "+Business"
          onPress={() => {
            navigation.navigate('test')} 
          }
        />
    }
  }

  renderItem({item, index}) {
    return  <ListItem 
             company={item}
             />
  }

  render() {
    console.log('CompaniesScreen render  this.props.companies =', this.props.companies);
    console.log('CompaniesScreen render  this.props.navigation =', this.props.navigation);

    const navigation = this.props.navigation
    return (
      <View style={flex= 1}>
        <FlatList 
          data = {this.props.companies}
          renderItem={this.renderItem}
        />
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