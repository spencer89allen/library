import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TwoAddBook extends Component {

    state = {
        title: '',
        author: '',
        page_count: 0,
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='field is-horizontal'>
                        <div className='field-label is-normal'>
                            <label className='label'>Title:</label>
                        </div>
                        <div className='field-body'>
                            <div className='field'>
                                <p className='control'>
                                    <input className='input' placeholder='Title'></input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Author:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input" placeholder="Author Name" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Page Count:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input" placeholder="Number of pages in Book" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='level'>
                        <div className="level-left">
                            <p className="button is-warning">
                                <strong>
                                    <Link to='/addBook/step1'>
                                        ⬅ Previous Page
                                    </Link>
                                </strong>
                            </p>
                        </div>
                        <div className="level-right">
                            <p className="button is-link is-hovered">
                                <strong>
                                    Add New Book
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default TwoAddBook