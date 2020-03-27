import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyWorksData from '../dummy/works.json';
import dummyMediaData from '../dummy/medias.json';

///////////////////////////////////////
////
//// for add to key Value ID / FeedId
////
///////////////////////////////////////

// function toKeyValueID(array) {
//   let result = array.reduce((acc, it) => ({ ...acc, [it.id]: it }), {});
// }

function toKeyValueID(array) {
  //toKeyValueFeedID

  //ver_0
  // for (let i = 0; i < array.length; i++) {

  //   result[array[i].id] = array[i];
  //   result[array[i].id].isLiked = false;

  //   //to change 'slice date' instead of createdAt
  //   result[array[i].id].createdAt = array[i].createdAt.slice(0, 10);
  // }

  //ver_1 (need to isLiked & change creatAt)
  // let result = array.reduce((prev, current) => ({ ...prev, [current.id]: current }), {});
  // console.log(result);

  //ver_2
  let result = array.reduce((prev, current) => {
    if (!Object.prototype.hasOwnProperty(prev, current.id)) {
      return {
        [current.id.toString()]: {
          ...current,
        },
        ...prev,
      };
    }
    return {
      ...prev,
    };
  }, {});
  return result;
}

const initialState = {
  works: toKeyValueID(dummyWorksData.data.list),
  media: toKeyValueID(dummyMediaData.data.list),
};

/////////////////////////////////////////////////////////////////
////
//// for use REDUX DEVTOOLS at only development environments
////
/////////////////////////////////////////////////////////////////

const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
