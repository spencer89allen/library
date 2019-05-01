import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


import ChapterList from './ChapterList';
import DisplayReport from './DisplayReport';
import Summary from './Summary';


class Report extends Component {



    render() {

        // console.log(this.props.delete)
        
        return (
            <div className='container is-fluid'>
                <div className='columns'>
                    <ChapterList info={this.props.info} />
                    
                    <Route
                        path={this.props.match.path}
                        exact
                        render={() => <Summary summary={this.props.summary}/> } />
                    <Route
                        path={`${this.props.match.path}/chapter/:chapter_id`} 
                        render={ () => 
                            <DisplayReport 
                                info={this.props.info} 
                                delete={this.props.delete} />
                        } />
                </div>
            </div>
        )
    };
};

export default withRouter(Report);