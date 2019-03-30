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
                <div className="level-right">
                    <p className="level-item">
                        <strong>
                            <Link to='addBook/step1'>
                                Add a Book 
                            </Link>
                        </strong>
                    </p>
                </div>
            </nav>
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Spencer's Library
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