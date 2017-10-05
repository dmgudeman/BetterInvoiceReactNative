
import { 
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  GET_USER_ID
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      console.log("LLLLLLLLLLLLLLLL", action.userId);
      return { ...state,  token: action.payload, userId: action.userId };
    case FACEBOOK_LOGIN_FAIL:
      return { ...state, token:  null };
    case GET_USER_ID:
       console.log('IN REDUCER ACTION.USERID ', auth.userId);
      return { ...state, userId: auth.userId}
    default :
      return state;
  }
}