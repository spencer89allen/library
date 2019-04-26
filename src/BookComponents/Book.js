import React, { Component } from 'react';
import axios from 'axios';

import HeaderBook from './HeaderBook';
import Report from './Report';

class Book extends Component {

    state = {
        id: null,
        title: '',
        headerImage: '',
        chapterInfo: [],
    }


    componentWillMount() {
        axios.get(`/api/getBook/${this.props.match.params.book_id}`).then((response) => {
            this.setState({
                id: this.props.match.params.book_id,
                title: response.data[0].title,
                headerImage: response.data[0].header_image,
            })
        })
        this.getChapterInfo()
    };

    getChapterInfo = () => {
        axios.get(`/api/getChapterList/${this.props.match.params.book_id}`).then(response => {
            this.setState({
                chapterInfo: response.data
            }) 
        })
    }
    
    render() {
        
        return (
            <div>
                <HeaderBook header={this.state.title} bookId={this.state.id} image={this.state.headerImage}/>
                <Report info={this.state.chapterInfo}/>
            </div>
        )
    };
};

export default Book;