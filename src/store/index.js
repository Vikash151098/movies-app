import { createStore } from 'redux';
import PostsReducer from '../reducers/index'

const store = createStore(PostsReducer);

export default store;

// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'Read the docs'
// });
