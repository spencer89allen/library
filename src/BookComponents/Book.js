import React, { Component } from 'react';
import axios from 'axios';

import HeaderBook from './HeaderBook';
import Report from './Report';

class Book extends Component {

    state = {
        id: null,
        headerImage: '',
        title: '',
        chapterList: [],
    }

    componentWillMount() {
        axios.get(`/api/getBook/${this.props.match.params.id}`).then((response) => {
            console.log(response.data)
            this.setState({
                id: this.props.match.params.id,
                title: response.data.title,
                headerImage: response.data.header_image,

            })
            console.log(this.state)
        })
    };

    render () {
        return (
            <div>
                <HeaderBook header={this.state.title} bookId={this.state.id}/>
                <Report />
            </div>
        )
    };
};

export default Book;