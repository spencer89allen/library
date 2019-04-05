import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header';
import DisplayShelf from './DisplayShelf';
import './DisplayStyling.css';



class Shelf extends Component {

    state = {
        bookList: [],
    }

    componentDidMount() {
        this.handleGetBooks();
        
    }

    handleGetBooks = () => {
        axios.get('/api/getBooks').then((response) => {
            this.setState({
                bookList: response.data
            })
        })
    }

    handleDeleteBook = (id) => {
        axios.delete(`/api/deleteBook/${id}`).then(response => {
            this.setState({
                bookList: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <DisplayShelf book={this.state.bookList} delete={this.handleDeleteBook}/>
            </div>
        )
    }
};

export default Shelf;