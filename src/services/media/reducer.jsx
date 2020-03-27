import { Media } from './actions';

const initialState = {};

export function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case Media: {
      return state;
    }
    default:
      return state;
  }
}
