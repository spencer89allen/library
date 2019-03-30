import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class OneAddBook extends Component {

    state = {
        coverImage: '',
        headerImage: '',
    }


    render() {
        return (
            <div className='container'>
                <div className='field is-horizontal'>
                    <div className='field-label is-normal'>
                        <label className='label'>Book Cover Image:</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control'>
                                <input className='input' placeholder='Book Cover Image URL'></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Header Image:</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" placeholder="Book Header Image URL" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <p className="button is-warning">
                        <strong>
                            <Link to='/addBook/step2'>
                                Next ➡
                            </Link>
                        </strong>
                    </p>
                </div>
            </div>
        )
    }
};

export default OneAddBook