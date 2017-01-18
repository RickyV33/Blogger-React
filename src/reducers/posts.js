import { FETCH_POST } from '../actions/index';

const INITAL_STATE = { all: [], post: null };

export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log(action.payload);
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}