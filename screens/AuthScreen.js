
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);

    // uncomment to clear token from local storage//////////////////////
  
    AsyncStorage.removeItem('fb_token');
    console.log("In AUUUUUUUUUUUthScreen",('fb_token)' === true));
  }

  componentWillReceiveProps(nextProps){
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('companies');
    }
  }
  render() {
    return (
      <View>
        <Text> auth screen </Text>
        <Text> auth screen </Text>
        <Text> auth screen </Text>
        <Text> auth screen </Text>

        <Text> auth screen </Text>
        </View>
    )
  }
}
function mapStateToProps({ auth }) {
  return {token: auth.token}
}

export default connect(mapStateToProps, actions)(AuthScreen);