import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';


import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  GET_USER_ID
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
    permissions: ['public_profile', 'email']}
  );

  if (type === 'success'){
     const response = await fetch( `https://graph.facebook.com/me?access_token=${token}`);
    //  const userId = (await response.json()).id;
     const userId = (await response.json()).id
     console.log('USSSSSSSSSSERID', userId);
     const email = await fetch( `https://graph.facebook.com/1929587090588927?access_token=${token}&fields=email`);
     const credential = firebase.auth.FacebookAuthProvider.credential(token);
     console.log('CCCCCCCCCCCCCCCCCRRRRRRRRRRRREEEEEEEEEEEE', credential);
     console.log('emailllllllllll', email);
     console.log('token', token);
    //  await AsyncStorage.setItem('fb_id', userId);
     await AsyncStorage.setItem('fb_token', token);
     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token, userId: userId})
  }
  else if (type === 'cancel'){
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }
 
}

export const getUserId = () => async dispatch => {
     await console.log( "Hi ", state.userId);
  return dispatch({type: GET_USER_ID, userId: state.userId})

}