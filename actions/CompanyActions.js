
import { AsyncStorage } from 'react-native';
import {
  FETCH_COMPANIES
} from './types';

export const fetchCompanies = (userId) => async dispatch => {
  console.log('KKKKKKKKKKKKKKKKK', userId);
  return { hiThere: 'hi there'}
  
  // return (dispatch) => {
  //   firebase.database().ref(`/users/${userId}/companies`)

  // }
}