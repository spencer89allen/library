import React from 'react';

export default function HeaderBook() {
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
                        
                            <a className='button is-primary'>
                                <strong>Add Chapter Summary</strong>
                            </a>
                        
                    </div>
                </div>
            </nav>
            <section class="hero is-light is-medium">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Book:id Title
                        </h1>
                        <h2 class="subtitle">
                            Spencer's Summaries
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
};