import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {
  
  render() {
    <CardSection>
      <Text>{this.props.company.name}</Text>
    </CardSection>

  }
}

export default ListItem;