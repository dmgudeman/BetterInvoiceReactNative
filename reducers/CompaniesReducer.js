import {
  FETCH_COMPANIES ,
  FETCH_COMPANIES_SUCCESS
} from '../actions/types';

const INITIAL_STATE ={ userId: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case FETCH_COMPANIES:
      console.log('FETCH_COMPANIES action.userId', action.userId);
      return { ...state, userId: action.userId };
    case FETCH_COMPANIES_SUCCESS:
      console.log('actionssssssssssssssssssssss', action.payload);
      return { ...state,  companies: action.payload }
=======
    // case FETCH_COMPANIES:
    //   console.log('FETCH_COMPANIESssssssss', action.payload);
    //   return { ...state, companies: action.payload };
    case FETCH_COMPANIES_SUCCESS:
      console.log('FETCH_COMPANIES_SUCCESS actionssssssssssssssssssssss', action.payload);
      return { ...state,  companies: action.payload}
>>>>>>> sat
    default:
      return state;
  }
}