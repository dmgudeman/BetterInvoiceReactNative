import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { CardSection, Card, Button, Header } from './common';


class ItemDetailsRow extends Component {

  componentWillMount(){
    console.log('ITEMSDETAILSROW ', this.props);
  }
 
   

  render() {
    return (
      <View >
        <CardSection>
          <div>{this.props.item.date}</div>
          <div>{this.props.item.hours}</div>
        </CardSection>
      </View>
      
    )
  } 
    




}

export default ItemDetailsRow;