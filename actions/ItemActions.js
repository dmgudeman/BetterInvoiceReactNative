import firebase from 'firebase';
import thunk from 'redux-thunk';
import {ITEM_UPDATE, ITEM_CREATE} from './types';


export const itemCreate = ({fUserId, coId, date, hours, amount, description}) => async dispatch => {
  let payload = {fUserId, coId, date, hours, amount, description}
  console.log('PAYLOAD', payload);
  console.log('fUserId', fUserId);
  let newItemKey = await firebase.database().ref().child('companies').child('items').push().key;
  payload.itemKey = newItemKey;
  console.log('PAYLOAD itemKey', payload.itemKey);
  let updates = {};
  updates['/users/'+ payload.fUserId + '/companies/'+ payload.coId + '/items/' + payload.itemKey] = payload;
  await firebase.database().ref().update(updates);
  dispatch => {type: ITEM_CREATE}
   
 }

export const itemUpdate = (prop, value)=> {
  // ({prop, value}) => {
  console.log('ITEMACTIONS itemUpdate action', prop, value);
  return {
    type: ITEM_UPDATE,
    payload: { prop, value}
  }


}