import {
  FETCH_COMPANIES ,
  FETCH_COMPANIES_SUCCESS
} from '../actions/types';

const INITIAL_STATE ={ userId: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return { ...state, userId: action.userId };
    case FETCH_COMPANIES_SUCCESS:
      console.log('actionssssssssssssssssssssss');
      return { ...state,  companies: action.companies}
    default:
      return state;
  }
}