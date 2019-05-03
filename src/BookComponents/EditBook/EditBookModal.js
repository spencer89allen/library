import React, { Component } from 'react';

class EditBookModal extends Component {





    render() {

        return (
            <div>
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Edit</p>
                            <button className="delete" aria-label="close" onClick={() => this.props.toggleEdit()}></button>
                        </header>
                        <section className="modal-card-body">
                            
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success">Save changes</button>
                            <button className="button" onClick={() => this.props.toggleEdit()}>Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    };
};

export default EditBookModal;