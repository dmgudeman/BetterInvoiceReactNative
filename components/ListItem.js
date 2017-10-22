import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Card, Button, Header } from './common';
// import { Card, Button } from 'react-native-elements';
import ItemEditScreen from '../screens/ItemEditScreen'; 
import { MainNavigator } from '../App';

class ListItem extends Component {
  
  // componentWillMount() {
  //   console.log('ListItem componentWillMount this.props = ', this.props);
  // }

  // constructor(props) {
  //   super(props)
  //   console.log('ListItem constructor this.props', this.props);
  // }

  
  renderCard(company) {
    return(
      <Card name={company.name}/>
    )

  }
  convertColor(color) {

    if(color === 'red') {
      return '#F11C1C'
    }
    return '#1F1313'

  }
  render() {
    // console.log('ListItem renderr this.props = ', this.props);
    const { navigate } = this.props.navigation
    const { name, color } = this.props.company
    // console.log('ListItem COOOOOOOOOOOLLLLLLLLLLLLLLOOOOOOOOOOOOR', `'${color}'`);
    // const bgColor = this.convertColor(color); 
    // console.log('ListItem COOOOOOOOOOOLLLLLLLLLLLLLLOOOOOOOOOOOOR', bgColor);
    // console.log('IS IS A STRING', (typeof bgColor === 'string'));
    // console.log('IS IS A STRING', (typeof `'${bgColor}'` === 'string'));
    return (
      <Card color={color}>
        <CardSection>
          <View style={ styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{ name }</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.buttonRowStyle}>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('items')} }>Details</Button>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('invoices')} }>Invoices</Button>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('invoiceEdit')} }>+Invoice</Button>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('itemEdit')} }>+Item</Button>
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

  },
  headerTextStyle: {
    fontSize: 22,
    color: 'white'
  },
  buttonRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
  },
  buttonContentStyle: {
    flex: 1,
  }
}

export default ListItem;