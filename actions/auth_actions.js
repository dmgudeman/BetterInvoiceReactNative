import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

// action creator
export const facebookLogin = () => async dispatch => {
  // let token = await AsyncStorage.getItem('fb_token');
  // if (token) {
  //   // Dispatch an action FB login is done
  //   dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  // } else {
    // Start up FB login process
    doFacebookLogin(dispatch);
  // }
}

// helper function
const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('156776871536365',{
    permissions: ['public_profile']}
  );

  if (type === 'success'){
     const response = await fetch( `https://graph.facebook.com/me?access_token=${token}`);
     const userId = (await response.json()).id;
     await console.log( "Hi ", userId);
     await console.log('tooooookeeeennn', token);
     
     await console.log('ttttyyypppeeee', type);
     await AsyncStorage.setItem('fb_id', userId);
     await AsyncStorage.setItem('fb_token', token);
     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token, userId: userId})
  }
  else if (type === 'cancel'){
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }
 
}