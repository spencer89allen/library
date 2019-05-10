import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DeleteBookModal from './DeleteBookModal';

function DisplayShelf(props) {
    console.log(props)
    const books = props.book.map(book => {
        return (

            <div className='shelfItem' key={book.id}>
                <div className="level buttons are-small is-focused">
                    <div className='bookCover'>
                        <Link to={`/book/${book.id}`}>
                            <img src={book.cover_image}
                                alt="nothing to display"
                                className="image"
                            />
                        </Link>
                    </div>
                    <br />
                    {
                        props.user ?
                            (
                                // <div className="button level-right is-danger is-outlined" onClick={() => props.delete(book.id)}>
                                //     Remove
                                // </div>
                                <div className="button level-right is-danger is-outlined" onClick={() => props.toggleDeleteBook()}>
                                    Remove
                                </div>
                            )
                            :
                            (
                                null
                            )
                    }
                    {
                        props.showModal ? <DeleteBookModal 
                                                    info={props.book}
                                                    delete={props.delete} 
                                                    toggleDeleteBook={props.toggleDeleteBook}
                                            />

                        :

                        null
                            
                    }
                </div>
            </div>
            
        )
    })
    return (
        <div className='OuterContainer'>
            {books}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        user: state.LoginReducer.user
    }
};

export default connect(mapStateToProps, {})(DisplayShelf);

