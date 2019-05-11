import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


import OneAddBook from './OneAddBook';
import TwoAddBook from './TwoAddBook';



class AddBook extends Component {

    constructor(props) {
        super(props)

        this.state={
            showModal: false
        }

    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

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
                    <Route render={(props) => <OneAddBook {...props} showModal={this.toggleModal} showModalState={this.state.showModal}/>} path='/addBook/step1' />
                    <Route render={(props) => <TwoAddBook {...props} showModal={this.toggleModal} showModalState={this.state.showModal}/>} path='/addBook/step2' />
                </Switch>
            </div>
        )
    }
};

export default AddBook