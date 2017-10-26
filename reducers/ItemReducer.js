import {
  ITEM_CREATE , ITEM_UPDATE
} from '../actions/types';

const INITIAL_STATE ={ userId: '', coId: '', hours: '', amount:'', date:'', description: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value}
    default:
      return state;
  }
}