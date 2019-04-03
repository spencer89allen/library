import { createStore } from 'redux';

import AddBookReducer from '/Users/spencerallen/projects/library/src/redux/AddBookReducer.js';

export default createStore(AddBookReducer,  /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());