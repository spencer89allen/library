import React, { Component } from 'react';


import ChapterList from './ChapterList';
import DisplayReport from './DisplayReport';


class Report extends Component {

    render() {
        return (
            <div className='container is-fluid'>
                <div className='columns'>
                    <ChapterList />
                    <DisplayReport />
                </div>
            </div>
        )
    };
};

export default Report;