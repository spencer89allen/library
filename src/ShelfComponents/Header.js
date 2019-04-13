import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
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
                            <Link to='addBook/step1'>
                            <p className='button is-info'>
                                <strong>Add New Book</strong>
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