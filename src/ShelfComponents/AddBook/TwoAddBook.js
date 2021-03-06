import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DontForgetModal from './DontForgetModal';





class TwoAddBook extends Component {

    state = {
        title: '',
        author: '',
        summary: '',
    }

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    
    }

    handlePost = () => {
        console.log(this.props)
        const { coverImage, headerImage } = this.props
        const body = {
            coverImage: coverImage,
            headerImage: headerImage,
            title: this.state.title,
            author: this.state.author,
            summary: this.state.summary,
        }
        axios.post(`/api/addBook`, body).then(() => {
            this.props.history.push('/')
        })

    }


    render() {
        // console.log('2 state', this.state)
        // console.log('2 props', this.props)
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
                                    <input className='input'
                                        placeholder='Title'
                                        name='title'
                                        value={this.state.title}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                    ></input>
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
                                    <input className="input"
                                        placeholder="Author Name"
                                        name='author'
                                        value={this.state.author}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Summary:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <textarea className="textarea" 
                                            placeholder="Maybe add the book cover summary"
                                            name='summary'
                                            value={this.state.summary}
                                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                            />
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

                            {
                                this.state.title && this.state.author && this.state.summary ?

                                <span className="button is-link is-hovered" onClick={() => this.handlePost()}>
                                    <strong>
                                        Add New Book
                                    </strong>
                                </span>
                                        
                                :

                                <span className="button is-link is-hovered" onClick={() => this.props.showModal()}>
                                    <strong>
                                        Add New Book
                                    </strong>
                                </span>
                            }
                        </div>
                    </div>
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

function mapStateToProps(state) {
    return state.AddBookReducer
}

export default connect(mapStateToProps)(TwoAddBook);