import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {
  
  render() {
    console.log('IN ListITem this.props = ', this.props);

    const{ name } = this.props.company

    return (
      <CardSection>
        <Text>{ name }</Text>
      </CardSection>
    );
  }
}

export default ListItem;