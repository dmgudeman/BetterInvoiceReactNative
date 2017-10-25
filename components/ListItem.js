import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { CardSection, Card, Button, Header } from './common';
// import { Card, Button } from 'react-native-elements';
import ItemEditScreen from '../screens/ItemEditScreen'; 
import { MainNavigator } from '../App';

const setParamsAction = (params, key ) => {NavigationActions.setParams({
  params, key
})}
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
    // const { name, color, coId } = this.props.company
    console.log('TTTTTTTTTTTTTThis this.props', this.props);

    return (
      <Card color={this.props.company.color}>
        <CardSection>
          <View style={ styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{ this.props.company.name }</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.buttonRowStyle}>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('items')} }>Details</Button>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('invoices')} }>Invoices</Button>
            <Button style={ styles.buttonContentStyle } onPress={() => { navigate('invoiceEdit')} }>+Invoice</Button>
            <Button style={ styles.buttonContentStyle } onPress={() => { 
              navigate('itemCreate',{params: { coId: this.props.company.id}} )}}>+Item</Button>
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