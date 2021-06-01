import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { MoviesReducer, OrderSelectReducer } from '../reducers/index'
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    MoviesReducer,
    OrderSelectReducer
}),
    applyMiddleware(thunk));

export default store;

// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'Read the docs'
// });
