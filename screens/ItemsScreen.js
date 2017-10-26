import React, { Component } from 'react';
import { View, Text , FlatList} from 'react-native';
import {ItemDetailsRow} from '../components/ItemDetailsRow';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ItemsScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    console.log('this.props in ItemsScreen', this.props.items);
    // this.props.fetchItems(this.props.fUserId, this.props.coId)
  }
  renderItem =({item, index})=> {
    console.log('item in renderItem ItemsScreen', item);
    return  (
      <View> 
       <ItemDetailsRow item={item} navigation={this.props.navigation}/>
      <Text> I'm here </Text>
    </View>
   
    )
  }

  render() {
    return (
      <View style={{ flex:1}}> 
        <FlatList 
          data = {this.props.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item, index})=> {
            console.log('ITEMMMMMMM', item);
            return (<Text style={{flex:1}}>{`Hi there ${item.date}`}</Text>)
          }}
        />
      </View>
    )
  }
}
const mapStateToProps = state => {
  console.log('State in ItemsScreen', state);
  const coId = Object.keys(state.companies.companies)[0];

  // const { date, hours, amount, description } = state.item;
  const  fUserId = state.auth.fUserId;
  const items = state.companies.companies[coId].items
  console.log('ITEMSSSSSS', items, 'coId', coId);
  // const hourly = state.companies.companies[coId].hourly;
 
  return { fUserId, coId, items};
}
export default connect(mapStateToProps, actions)(ItemsScreen);
