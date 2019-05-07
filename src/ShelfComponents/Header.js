import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './StyleHeader.css';




function Header(props) {
    //console.log(props)
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
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <strong>
                            {props.isLogin ?
                                (
                                    <div>
                                        <span className="button is-warning is-outlined">
                                            <Link to=''>
                                                <p>
                                                    <strong>Log Out</strong>
                                                </p>
                                            </Link>
                                        </span>
                                    </div>
                                )
                                :
                                (
                                    <div className='buttons has-addons is-right'>
                                        <span className="button is-info is-outlined">
                                            <Link to='/login'>
                                                <p>
                                                    <strong>Login</strong>
                                                </p>
                                            </Link>
                                        </span>
                                        <span className="button is-info is-outlined">
                                            <Link to='/login'>
                                                <p>
                                                    <strong>New User</strong>
                                                </p>
                                            </Link>
                                        </span>
                                    </div>
                                )
                            }
                        </strong>
                    </div>
                </div>
            </nav>
            <section className="hero heroHeader is-medium ">
                <div className="hero-body">

                    <div className="container">

                        <h1 className="title "
                            style={
                                {
                                    color: 'white',
                                    textShadow: '0 1px 3px #0008'
                                }
                            }>
                            Spencer's Library
                        </h1>
                        <h2 className="subtitle"
                            style={{ color: 'white' }}>
                            Book Summaries
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
                                            <Link to='addBook/step1'>
                                                <p className='button is-info'>
                                                    <strong>Add New Book</strong>
                                                </p>
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
        isLogin: state.LoginReducer.isLogin
    }
};

export default connect(mapStateToProps)(Header);