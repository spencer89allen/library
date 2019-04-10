import React, { Component } from 'react';
import axios from 'axios';

import HeaderBook from './HeaderBook';
import Report from './Report';

class Book extends Component {

    state = {
        headerImage: '',
        title: '',
        author: '',
        chapterList: [],
    }

    componentWillMount() {
        axios.get(`/api/getBook/${this.props.match.params.id}`).then()
    }

    render () {
        return (
            <div>
                <HeaderBook />
                <Report />
            </div>
        )
    };
};

export default Book;