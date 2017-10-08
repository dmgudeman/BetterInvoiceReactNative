
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import thunk from 'redux-thunk';

import {
  // FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS
  
} from './types';


export const fetchCompanies = (userId) => async dispatch => {
  console.log('fetchCompanies USERID ==== ', userId);
    
   let companies = await firebase.database().ref('/users/' + userId + '/companies')
      .once('value', snapshot => {
        console.log('fetchCompanies action snapshot.val()', snapshot.val());
        dispatch({type: FETCH_COMPANIES_SUCCESS, payload: snapshot.val()})
      })
    
    return companies;
  }
  