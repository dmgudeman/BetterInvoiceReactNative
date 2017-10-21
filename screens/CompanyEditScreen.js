
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import TestScreen from './TestScreen';
import {ChildNavigator} from '../App';

class CompanyEditScreen extends Component {
  render() {
    console.log('CompanyEditScreen render this.props', this.props);
    return (
      <View>
        <Text>CompanyEditScreen</Text>
        <TestScreen />
        <ChildNavigator/>
        <Button
          title= "+Business"
          onPress={() => {
            navigation.navigate('itemEdit')} 
          }
        />
      </View>
    )
  }
}
export default CompanyEditScreen;