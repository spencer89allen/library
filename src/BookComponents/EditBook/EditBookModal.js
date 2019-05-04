import React, { Component } from 'react';
import axios from 'axios';

class EditBookModal extends Component {

    state = {
        book_id: this.props.chapterInfo.book_id,
        chapter_id: this.props.chapterInfo.id,
        chapter_number: this.props.chapterInfo.chapter_number,
        chapter_title: this.props.chapterInfo.chapter_title,
        chapter_notes: this.props.chapterInfo.chapter_notes,
    }


    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
        
    }

    handleChapterEdit = () => {
        const { book_id, chapter_id, chapter_number, chapter_title, chapter_notes } = this.state
        const body = { book_id, chapter_id, chapter_number, chapter_title, chapter_notes }

        axios.put(`/api/editChapter`, body).then(response => {
            this.props.toggleEdit()
            //response becomes info in the report component method 'this.updateBook(info)'
            this.props.updateBook(response)
        })
    }



    render() {

        //console.log(this.props)
        // console.log(this.state)

        return (
            <div>
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Edit {this.state.chapter_title} Notes</p>
                            <button className="delete" aria-label="close" onClick={() => this.props.toggleEdit()}></button>
                        </header>
                        <section className="modal-card-body">
                            <label className="title is-6">Chapter Number:</label>
                            <input className="input is-small"
                                    type="text"
                                    placeholder="Text input"
                                    name='chapter_number'
                                    value={this.state.chapter_number} 
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
                            <br />
                            <br />
                            <label className="title is-6">Chapter Title:</label>
                            <input className="input is-small"
                                    type="text"
                                    placeholder="Text input"
                                    name='chapter_title'
                                    value={this.state.chapter_title} 
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                            <br />
                            <br />
                            <label className="title is-6">Chapter Notes:</label>
                            <textarea className="textarea is-small"
                                    rows='10'
                                    type="text"
                                    placeholder="Text input"
                                    name='chapter_notes'
                                    value={this.state.chapter_notes}
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                            <br />
                            <br />
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={() => this.handleChapterEdit()}>Save changes</button>
                            <button className="button" onClick={() => this.props.toggleEdit()}>Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    };
};

export default EditBookModal;