import React, { Component } from 'react';
import axios from 'axios';

import HeaderBook from './HeaderBook';
import Report from './Report';

class Book extends Component {

    state = {
        id: null,
        title: '',
        headerImage: '',
        chapterList: [],
    }

    componentWillMount() {
        axios.get(`/api/getBook/${this.props.match.params.id}`).then((response) => {

            this.setState({
                id: this.props.match.params.id,
                title: response.data[0].title,
                headerImage: response.data[0].header_image,

            })
        })
        this.getChapterList()
        
    };

    getChapterList = () => {
        axios.get(`/api/getChapterList/${this.props.match.params.id}`).then(response => {
            this.setState({
                chapterList: response.data[0]
            }) 
            console.log(this.state) 
        })
    }

    render() {
        return (
            <div>
                <HeaderBook header={this.state.title} bookId={this.state.id} />
                <Report />
            </div>
        )
    };
};

export default Book;