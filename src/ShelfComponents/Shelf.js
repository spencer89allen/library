import React, { Component } from 'react';

import Header from './Header';
import DisplayShelf from './DisplayShelf';



class Shelf extends Component {

    state = {
        bookList: [],
    }


    render() {
        return (
            <div>
                <Header/>
                <DisplayShelf/>
            </div>
        )
    }
};

export default Shelf;