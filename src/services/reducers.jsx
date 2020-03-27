import { combineReducers } from 'redux';
import { feedReducer } from './works/reducer';
import { mediaReducer } from './media/reducer';

export const rootReducer = combineReducers({
  works: feedReducer,
  media: mediaReducer,
});
