import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


import ChapterList from './ChapterList';
import DisplayReport from './DisplayReport';


class Report extends Component {



    render() {
        
        return (
            <div className='container is-fluid'>
                <div className='columns'>
                    <ChapterList info={this.props.info}/>
                    <Route path={this.props.match.path} exact render={() => < DisplayReport info={this.props.info}/> } />
                    <Route path={`${this.props.match.path}/chapter/:chapter_id`} render={() => < DisplayReport info={this.props.info}/> } />
                </div>
            </div>
        )
    };
};

export default withRouter(Report);