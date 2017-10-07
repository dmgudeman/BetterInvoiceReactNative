
import React, { Component } from 'react';
import { Text } from 'react-native';
import {CardSection } from './common';


class Sparky extends Component {
  render (){
    return (
      <CardSection>
        <Text>{this.props.company.name}</Text>
      </CardSection>
    )

  }
}

export default Sparky;