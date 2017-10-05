import {
  FETCH_COMPANIES 
} from '../actions/types';

const INITIAL_STATE ={ userId: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
}