import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { login } from '/Users/spencerallen/projects/library/src/redux/LoginReducer.js';
import { logOut } from '../redux/LoginReducer';

import './HeaderBook.css';

function HeaderBook(props) {
    

    console.log(props)

    return (
        <div className="container is-fullhd">
            <br />
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to={`/`}>
                        <p className="navbar-item" >
                            <strong>Home</strong>
                        </p>
                    </Link>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        {
                            props.isLogin ?
                                (
                                    <div>
                                        <span className="button is-warning is-outlined"
                                            onClick={() => props.logout()}>
                                            
                                                <p>
                                                    <strong>Log Out</strong>
                                                </p>
                                            
                                        </span>
                                    </div>
                                )
                                :
                                (
                                    <Link to={`/login`} className='button is-primary text-bold'>
                                        Login
                                    </Link>
                                )
                        }
                    </div>
                </div>
            </nav>
            <section className="hero is-medium"
                style={
                    {
                        backgroundImage: `url(${props.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {props.header}
                        </h1>
                        <h2 className="subtitle">
                            Spencer's Notes
                        </h2>
                    </div>
                </div>
            </section>
            <nav className="level">
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <strong>
                            {props.isLogin ?
                                (
                                    <div className='buttons is right'>
                                        <span>
                                            <Link to={`/book/${props.bookId}/chapter/new`} className='button is-primary'>
                                                <strong>Add Chapter Summary</strong>
                                            </Link>
                                        </span>
                                    </div>
                                )
                                :
                                (
                                    null

                                )
                            }
                        </strong>
                    </div>
                </div>
            </nav>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        isLogin: state.LoginReducer.isLogin,
    }
};

export default connect(mapStateToProps, { login, logOut })(HeaderBook); 