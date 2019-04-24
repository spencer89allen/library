import { createStore, combineReducers } from 'redux';

import AddBookReducer from './AddBookReducer.js';
import LoginReducer from './LoginReducer.js';

var reducers = combineReducers({AddBookReducer, LoginReducer})
//take reducer name ohnne reducer


export default createStore(reducers,  /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());