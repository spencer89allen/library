import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import DisplayShelf from './DisplayShelf';



class Shelf extends Component {

    state = {
        bookList: [],
    }

    componentDidMount() {
        this.handleGetBooks();
    }

    handleGetBooks = (req, res) => {
        
        axios.get('/api/getBooks').then((response) => {
            this.setState({
                bookList: response.data
            })
        })
        
    }


    render() {
        return (
            <div>
                <Header/>
                <DisplayShelf book={this.state.bookList}/>
            </div>
        )
    }
};

export default Shelf;