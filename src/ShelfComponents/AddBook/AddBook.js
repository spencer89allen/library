import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


import OneAddBook from './OneAddBook';
import TwoAddBook from './TwoAddBook';


class AddBook extends Component {


    render() {
        return (
            <div className="container is-fullhd">
                <br />
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <p className="subtitle is-5">
                                <strong> BAM!</strong>
                            </p>
                        </div>
                    </div>
                    <div className="level-right">
                        <p className="button is-danger is-outlined ">
                            <strong>
                                <Link to='/'>
                                    Cancel
                                </Link>
                            </strong>
                        </p>
                    </div>
                </nav>
                <section className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Add a New Book
                            </h1>
                            <h2 className="subtitle">

                            </h2>
                        </div>
                    </div>
                </section>
                <br />
                <Switch>
                    <Route component={OneAddBook} path='/addBook/step1' />
                    <Route component={TwoAddBook} path='/addBook/step2' />
                </Switch>
            </div>
        )
    }
};

export default AddBook