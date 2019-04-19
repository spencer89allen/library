import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Shelf from '/Users/spencerallen/projects/library/src/ShelfComponents/ShelfFolder/Shelf.js';
import AddBook from '/Users/spencerallen/projects/library/src/ShelfComponents/AddBook/AddBook.js';
import Book from '/Users/spencerallen/projects/library/src/BookComponents/Book.js';
import NewChapter from '/Users/spencerallen/projects/library/src/BookComponents/AddChapter.js/NewChapter.js'

export default (
    <Switch>
        <Route component={ Shelf } exact path='/' />
        <Route component={ AddBook } path='/addBook' />
        <Route component={ NewChapter } path='/book/:book_id/chapter/new' />
        <Route component={ Book } path='/book/:book_id' />

    </Switch>
)
