
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MKButton, MKColor, MKTouchable } from 'react-native-material-kit';
import { Button } from 'react-native-elements';

class CompaniesScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Companies',
    headerRight:
        <Button 
          title= "Edit Co"
          onPress={() => navigation.navigate('companyEdit')} 
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

const ColoredRaisedButton = MKButton.coloredButton()
.withText('BUTTON')
.withOnPress(() => {
  console.log("Hi, it's a colored button!");
  navigation.navigate('companyEdit')
})
.build();



export default CompaniesScreen;