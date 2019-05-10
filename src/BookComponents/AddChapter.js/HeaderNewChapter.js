import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNewChapter(props) {
    return (
        <div className="container is-fullhd">
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
                        <p className="button is-danger is-outlined ">
                            <strong>
                                <Link to={`/book/${props.bookId}`}>
                                    Never Mind
                                </Link>
                            </strong>
                        </p>
                    </div>
                </div>
            </nav>
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            New {props.headerTitle} Chapter Report
                        </h1>
                        <h2 className="subtitle">
                            Primary bold subtitle
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
};