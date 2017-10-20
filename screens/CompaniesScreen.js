
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { View, Text, ListView } from 'react-native';
import { Button } from 'react-native-elements';
import { tabBarOptions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
// import { Button } from '../components/common';
import * as actions from '../actions';
import ListItem from '../components/ListItem'


class CompaniesScreen extends Component {
  
  componentWillMount() {
    this.props.fetchCompanies(this.props.userId)
    // this.props.fetchCompanies('1929587090588927')
    console.log('CompaniesScreen componentWillMount this.props.userId', this.props.userId);
    console.log('CompaniesScreen componentWillMount this.props', this.props);
   this.createDataSource(this.props);
    
  }
  componentDidMount() {
    this.props.fetchCompanies(this.props.userId)
    // this.props.fetchCompanies('1929587090588927')
    console.log('CompaniesScreen componentWillMount this.props.userId', this.props.userId);
    console.log('CompaniesScreen componentWillMount this.props', this.props);
   this.createDataSource(this.props);
    
  }
  
  componentWillReceiveProps(nextProps) {
    // nextProps are the props that the component will be rendered withi
    // this.props are the old set of props
    console.log('===============componentWillRecieveProps nextProps', nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({ companies }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(companies);
    console.log('dataSource is typeOf array =', Array.isArray(this.dataSource));
    console.log('dataSource = ', this.dataSource);
   }
  
  
  onButtonPress(){
    // const companies =  this.props.fetchCompanies(this.props.userId).then((data) => {console.log('data',  data)});
    const companies =  this.props.fetchCompanies('1929587090588927').then((data) => {console.log('data',  data)});
  //   const companies = this.props.fetchCompanies(this.props.userId)
  //   console.log('CompaniesScreen componentWillMount this.props', this.props);
  //  this.createDataSource(this.props);
   return companies;
  }

  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Companies',
    headerRight:
        <Button
          title= "+Business"
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
    console.log('IN RENDER COMPANIES SCREEN this.props =', this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        
        
      >
      </ListView>
  //     <View>
  //     <Button
  // title='BUTTON' onPress={this.onButtonPress.bind(this)} />
  //      </View>
     
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