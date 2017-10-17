import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, Card, Button } from './common';
// import { Card, Button } from 'react-native-elements';


class ListItem extends Component {
  renderCard(company) {
    return(
      <Card name={company.name}/>
  
    )

  }
  render() {
    console.log('IN ListITem this.props = ', this.props);

    const{ name, color } = this.props.company


    return (
      <Card>
        <CardSection>
          <Text>{ name }</Text>
          <Text>{ color }</Text>
        </CardSection>
      </Card>
    );
  }
}

export default ListItem;