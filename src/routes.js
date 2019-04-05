import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Shelf from '/Users/spencerallen/projects/library/src/ShelfComponents/ShelfFolder/Shelf.js';
import AddBook from '/Users/spencerallen/projects/library/src/ShelfComponents/AddBook/AddBook.js';

export default (
    <Switch>
        <Route component={ Shelf } exact path='/' />
        <Route component={ AddBook } path='/addBook' />
    </Switch>
)
