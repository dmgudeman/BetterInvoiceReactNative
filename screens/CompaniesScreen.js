
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';


class CompaniesScreen extends Component {
  tabBarOptions: {
    tabBarVisible: false
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

      </View>
    )
  }
}


export default CompaniesScreen;