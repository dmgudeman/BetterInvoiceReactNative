import {
  ITEM_CREATE , ITEM_UPDATE
} from '../actions/types';

const INITIAL_STATE ={ userId: '', coId: '', hours: '', amount:'', date:'', description: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ITEM_CREATE:
   
    //   console.log('ItemReducer ITEM_CREATE action.payload', action.payload);
    //   return { ...state,  item: action.payload}
    case ITEM_UPDATE:
    console.log('IN ITEM_UPDATE REDUCER');
      console.log('ItemReducer ITEM_UPDATE action.payload', action.payload);
      return { ...state, [action.payload.prop]: action.payload.value}
    default:
      return state;
  }
}