
import { combineReducers } from 'redux';
import auth from './auth_reducer';
import companies from './CompaniesReducer';

export default combineReducers({
  auth,
  companies
});