import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderBook(props) {
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
                        <Link to={`/book/${props.bookId}/chapter/new`}>
                            <p className='button is-primary'>
                                <strong>Add Chapter Summary</strong>
                            </p>
                        </Link>
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