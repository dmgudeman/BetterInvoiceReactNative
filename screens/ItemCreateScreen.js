import React, { Component } from 'react';
import { View, Text, DatePickerIOS }       from 'react-native';
import { connect } from 'react-redux';
import { 
  Button,
  FormLabel, 
  FormInput, 
  FormValidationMessage, 
}                           from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
// import MyDatePicker from '../components/MyDatePicker';
import DatePicker from 'react-native-datepicker';
import Moment from 'react-moment';
import * as actions from '../actions'
// import {react-timezone} from 'react-timezone';


class ItemCreateScreen extends Component {
 
  // static navigationOptions =({navigation}) => ({
  //   coId: navigation.state.params.coId
  // })
  // componentDidMount(){
  //    // this.props.coId = this.props.navigation.state.params.coId
  //    console.log('PROPS', props);
  //    console.log('PARAMS',this.props.navigation.state.params.params.coId);
  //    x = this.props.navigation.state.params.params.coId;
  //    this.props.itemUpdate('coId',x)
  //    console.log('PARAMS',this.props.navigation.state.params.params.coId);
  //    console.log('PROPS', props);
  // }
  constructor(props) {
    super(props);
   
    console.log('PROPSSSSSSS', props);
    // console.log('navigation.state', navigation.state);
    // const navigateAction = NavigationActions.navigate({
    //   routeName: 'itemCreate',
    //   params: {},
    
    //   // navigate can have a nested navigate action that will be run inside the child router
    //   action: NavigationActions.navigate({ routeName: 'companies'})
    // })
  }
  
 
  dateChange() {
    console.log('date change');
  }

  onSubmit = () => {
    
    const { fUserId, coId, date, hours, amount, description } = this.props
    console.log('date111111111', fUserId, coId, date, hours, amount, description);
    this.props.itemCreate({ fUserId, coId, date, hours, amount, description })
  }

  render() {
    return (
      <View>
        <FormLabel>Date</FormLabel>
        <DatePicker
        style={{width: 200}}
        date={this.props.date}
        mode="date"
        placeholder="select date"
        format="LL"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(value) => {
          this.props.itemUpdate('date',value )}
        }
      />
        <FormLabel>Hours</FormLabel>
        <FormInput 
          onChangeText={(value) => { 
              this.props.itemUpdate('hours', value) 
            }
          }
        />
        <FormLabel>Amount</FormLabel>
        <FormInput 
        onChangeText={(value) => this.props.itemUpdate('amount', value)}
        />
        <FormLabel>Description</FormLabel>
        <FormInput 
        onChangeText={(value) => this.props.itemUpdate('description', value)}
        />
        <Button
          title= "Submit"
          onPress =  {this.onSubmit }
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  console.log('state.companies',Object.keys(state.companies.companies)[0])
  const { date, hours, amount, description } = state.item
  const  fUserId = state.auth.fUserId
  const coId = Object.keys(state.companies.companies)[0];
  console.log('coIdddddddddddd', coId);
  return { date, hours, amount, description, fUserId, coId}
}
export default connect(mapStateToProps, actions)(ItemCreateScreen);