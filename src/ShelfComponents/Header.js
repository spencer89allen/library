import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
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
                            <Link to='addBook/step1'>
                            <p className='button is-info'>
                                <strong>Add New Book</strong>
                            </p>
                            </Link>
                            <Link to='/login'>
                            <p className='button is-info'>
                                <strong>Login</strong>
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
                            Spencer's Library
                        </h1>
                        <h2 className="subtitle">
                            Book Summaries
                        </h2>
                    </div>
                </div>
            </section>

        </div>
    )
};