import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
 
import { logOut } from '../../redux/LoginReducer';

import Header from '../Header';
import DisplayShelf from './DisplayShelf';
import Footer from '/Users/spencerallen/projects/library/src/Footer.js'
import './DisplayStyling.css';



class Shelf extends Component {

    state = {
        bookList: [],
        showModal: false,
        selectedBook: ''
    }

    componentDidMount() {
        this.handleGetBooks();

    };

    handleGetBooks = () => {
        axios.get('/api/getBooks').then((response) => {
            this.setState({
                bookList: response.data
            })
        })
    };

    handleDeleteBook = (id) => {
        axios.delete(`/api/deleteBook/${id}`).then(response => {
            this.setState({
                bookList: response.data
            })
        })

    };

    handleLogout = () => {
        axios.get(`/auth/logout`).then((res) => {
            this.props.logOut()
        })
    };

    toggleDeleteBook = (id) => {
        this.setState({
            showModal: !this.state.showModal,
            selectedBook: id,
        })
    }

    render() {
        return (
            <div>
                <Header logOut={this.handleLogout}/>
                <DisplayShelf book={this.state.bookList}
                    delete={this.handleDeleteBook} 
                    bookId={this.state.bookList.id}
                    toggleDeleteBook={this.toggleDeleteBook}
                    showModal={this.state.showModal}
                    selectedBook={this.state.selectedBook}
                    />
                <Footer />
            </div>
        )
    }
};

export default connect(null, { logOut })(Shelf);
