import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


import ChapterList from './ChapterList';
import DisplayReport from './DisplayReport';
import Summary from './Summary';


class Report extends Component {




    render() {


        return (
            <div className='container is-fluid'>
                <div className='columns'>
                    <ChapterList info={this.props.info} />

                    <Route
                        path={this.props.match.path}
                        exact
                        render={() => <Summary summary={this.props.summary} />} 
                    />
                    <Route
                        path={`${this.props.match.path}/chapter/:chapter_id`}
                        render={() => {
                            return !this.props.info[0] ? 

                                (
                                    <Summary summary={this.props.summary} />
                                )
                            : this.props.info[0].id ?
                        
                                (
                                <DisplayReport
                                    info={this.props.info}
                                    delete={this.props.delete}
                                    toggleEdit={this.props.toggleEdit}
                                    showModal={this.props.showModal}
                                    updateBook={this.props.updateBook}
                                />
                            )
                            : 
                            <Summary summary={this.props.summary} />
                            
                                }
                        } 
                    />
                </div>
            </div>
        )
    };
};

export default withRouter(Report);