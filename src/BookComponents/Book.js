import React, { Component } from 'react';
//import axios from 'axios';

import HeaderBook from './HeaderBook';
import ChapterList from './ChapterList';
import ReportDisplay from './ReportDisplay';

class Book extends Component {

    state = {
        id: null,
        headerImage: '',
        title: '',
        author: '',
        chapterList: [],
    }

    render () {
        return (
            <div>
                <HeaderBook />
                <ChapterList />
                <ReportDisplay />
            </div>
        )
    };
};

export default Book;