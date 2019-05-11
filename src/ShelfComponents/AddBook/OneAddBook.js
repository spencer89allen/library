import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addImages } from '/Users/spencerallen/projects/library/src/redux/AddBookReducer.js';
import DontForgetModal from './DontForgetModal';



class OneAddBook extends Component {

    state = {
        coverImage: '',
        headerImage: '',
    }

    handleInput = (key, value) => {
        this.setState({
            [key]: value,
        });

    };


    render() {
        //console.log('1', this.state, this.props)
        return (
            <div className='container'>
                <div className='field is-horizontal'>
                    <div className='field-label is-normal'>
                        <label className='label'>Book Cover Image:</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control'>
                                <input className='input'
                                    placeholder='Book Cover Image URL'
                                    type="text"
                                    name='coverImage'
                                    value={this.state.coverImage}
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
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
                                <input className="input"
                                    placeholder="Book Header Image URL"
                                    type="text"
                                    name='headerImage'
                                    value={this.state.headerImage}
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <p className="button is-warning">
                        <strong>
                            {
                                this.state.coverImage && this.state.headerImage ?

                                    <Link to='/addBook/step2' onClick={ () => this.props.addImages(this.state) }>
                                        Next ➡
                                    </Link>

                                    :

                                    // null

                                    <button className="button is-warning" onClick={() => this.props.showModal()}>
                                        Next ➡
                                    </button>





                            }

                        </strong>
                    </p>
                    {
                        this.props.showModalState ?

                        <DontForgetModal showModal={this.props.showModal}/>

                        :

                        null
                    
                    }
                </div>
            </div>
        )
    }
};


export default connect(null, { addImages })(OneAddBook);