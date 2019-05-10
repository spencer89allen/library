import React, { Component } from 'react';


class DeleteBookModal extends Component {

    render() {
        console.log(this.props.info[0].id)
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Whoa There!</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <p>
                            Are you sure you want to permanently delete {this.props.info[0].title} and its chapters?
                        </p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-warning" 
                                onClick={() => this.props.delete(this.props.info[0].id)}
                        >
                            Yes, remove the book
                        </button>
                        <button className="button is-info" 
                                onClick={() => this.props.toggleDeleteBook()}
                        >
                            Nope
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
};

export default DeleteBookModal;