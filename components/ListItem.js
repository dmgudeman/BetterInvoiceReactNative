import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Card, Button, Header } from './common';
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
        <CardSection >
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{ name }</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.buttonRowStyle}>
            <Button style={ styles.buttonContentStyle }>Hi</Button>
            <Button style={ styles.buttonContentStyle }>Hi</Button>
            <Button style={ styles.buttonContentStyle }>Hi</Button>
            <Button style={ styles.buttonContentStyle }>Hi</Button>
          </View>
        </CardSection>
       
      </Card>
    );
  }
}

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    height: 45,
    backgroundColor: 'purple',

  },
  headerTextStyle: {
    fontSize: 22,
    backgroundColor: 'pink'
  },
  buttonRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
    backgroundColor: 'red',
  },
  buttonContentStyle: {
    flex: 1,
    height: 15,
    width: 30,
    backgroundColor: 'pink'
  }
}

export default ListItem;