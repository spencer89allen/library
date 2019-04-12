import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNewChapter(props) {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="No Header, sorry" width="112" height="28" />
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    </a>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <p className="button is-danger is-outlined ">
                            <strong>
                                <Link to={`/book/${props.id}`}>
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