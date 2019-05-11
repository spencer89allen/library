import React, { Component } from 'react';


class DontForgetModal extends Component {

    render() {
        //console.log(this.props.info)
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className='card'>
                        <div className='card-content'>
                            <div className='content'>
                                Hey! Please fill in the input boxes.
                            </div>
                        </div>
                    </div>
                </div>
                    <button className="modal-close is-large" aria-label="close" onClick={() => this.props.showModal()}></button>
            </div>
            
                )
            }
        };
        
export default DontForgetModal;