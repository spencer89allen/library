import React, { Component } from 'react';
import axios from 'axios';

import HeaderNewChapter from './HeaderNewChapter';
import DontForgetModal from '../../ShelfComponents/AddBook/DontForgetModal';

class NewChapter extends Component {

    state = {
        id: null,
        bookTitle: '',
        number: '',
        title: '',
        notes: '',
        showModal: false,
    }


    componentWillMount() {
        axios.get(`/api/getBook/${this.props.match.params.book_id}`).then((response) => {
                this.setState({
                id: this.props.match.params.book_id,
                bookTitle: response.data[0].title
            })
            
        })
    
    }

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
        //console.log(this.state.title)
    }

    handlePostChapterNotes = () => {
        const { id, number, title, notes } = this.state;
        const chapterInfo = { id, number, title, notes };
        
        axios.post(`api/newChapterNotes`, chapterInfo).then(() => {
            this.props.history.push(`/book/${id}`)
        })

    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <div>
                <HeaderNewChapter bookId={this.state.id} headerTitle={this.state.bookTitle}/>
                <div className='container'>
                    <br />
                    <div className='field is-horizontal'>
                        <div className='field-label is-normal'>
                            <label className='label'>Chapter Number:</label>
                        </div>
                        <div className='field-body'>
                            <div className='field'>
                                <p className='control'>
                                    <input className='input'
                                        placeholder='#'
                                        type="text"
                                        name='number'
                                        value={this.state.number}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                    ></input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Chapter Title: </label>
                        </div>
                        <div className='field-body'>
                            <div className='field'>
                                <p className='control'>
                                    <input className='input'
                                        placeholder='Chapter Title goes here'
                                        type="text"
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
                            <label className="label">Chapter Notes: </label>
                        </div>
                        <div className='field-body'>
                            <div className='field'>
                                <p className='control'>
                                    <textarea className="textarea" 
                                            placeholder="10 lines of textarea" 
                                            rows="10"
                                            type='text'
                                            name='notes'
                                            value={this.state.value}
                                            onChange={ (e) => this.handleInput(e.target.name, e.target.value) } />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='level-right'>

                        {
                            this.state.bookTitle && this.state.number && this.state.notes ?

                            <p className='button is-link is-outlined' onClick={() => this.handlePostChapterNotes()}>
                                <strong>Post</strong>
                            </p>

                            :

                            <p className='button is-link is-outlined' onClick={() => this.toggleModal()}>
                                <strong>Post</strong>
                            </p>
                        }
                        
                    </div>
                </div>
                    {
                        this.state.showModal ?

                        <DontForgetModal showModal={this.toggleModal}/>

                        :

                        null
                    
                    }
            </div>
        )
    }
};

export default NewChapter;