
import { combineReducers } from 'redux';
import auth from './auth_reducer';
import CompaniesReducer from './CompaniesReducer';

export default combineReducers({
  auth,
  companies: CompaniesReducer
});