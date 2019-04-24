import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '/Users/spencerallen/projects/library/src/redux/LoginReducer.js';


function HeaderBook(props) {
    //console.log(props)
    return (
        <div>
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
                                <Link to={`/book/${props.bookId}/chapter/new`}>
                                    <p className='button is-primary'>
                                        <strong>Add Chapter Summary</strong>
                                    </p>
                                </Link>
                            )
                            :
                            (
                                <Link to={`/login`}>
                                    <p className='button is-primary'>
                                        <strong>Login</strong>
                                    </p>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </nav>
            <section className="hero is-light is-medium">
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
        </div>
    )
};

function mapStateToProps(state) {
    return {
        isLogin: state.LoginReducer.isLogin,
    }
};

export default connect(mapStateToProps, { login })(HeaderBook); 