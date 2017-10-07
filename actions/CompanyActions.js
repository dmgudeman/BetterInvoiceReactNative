
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import {
  // FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS
} from './types';


export const fetchCompanies = (userId) => {
  console.log('USERID =========', userId);
  // return { hiThere: 'hi there'}
  // const companies = await firebase.database().ref('/users/' + userId + '/companies');
  // console.log('COCOCOCOCOCOCOCMPANIES', companies);
    return (dispatch) => {
      console.log("HHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIIII HTHHHHHHHHHHHHHHHEEEEEEEERE");
    firebase.database().ref('/users/' + userId + '/companies')
      .once('value', snapshot => {
        console.log('ssssssssssssnnnnnnappppppppshot.val()', snapshot.val());
        dispatch({type: FETCH_COMPANIES_SUCCESS, payload: snapshot.val()})
      })
    }
     
  }
  