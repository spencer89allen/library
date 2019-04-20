import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {
        return (
            <div className="">
                <br />
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <p className="navbar-item" >
                            <strong>BAM!</strong>
                        </p>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <strong>
                                <Link to='/'>
                                    <p className='button is-danger is-outlined'>
                                        <strong>Never Mind</strong>
                                    </p>
                                </Link>
                            </strong>
                        </div>
                    </div>
                </nav>
                <section className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Login to Spencer's Library
                            </h1>
                            <h2 className="subtitle">
                                yo!
                            </h2>
                        </div>
                    </div>
                </section>
                <br />
                <div className="container">
                    <div className="field is-horizontal">
                        <div className='field-label is normal'>
                            <label className="label">Username: </label>
                        </div>
                        <div className="field-body">
                            <div className='field'>
                                <p className='control'>
                                    <input className='input'
                                        placeholder='Username'>
                                    </input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="field is-horizontal">
                            <div className='field-label is normal'>
                                <label className="label">Password: </label>
                            </div>
                            <div className="field-body">
                                <div className='field'>
                                    <p className='control'>
                                        <input className='input'
                                            placeholder='Password'>
                                        </input>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="level-right">
                        <p className="button is-warning">
                            <strong>
                                <Link to='/'>
                                   Login
                                </Link>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;
