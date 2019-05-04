import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function DisplayShelf(props) {
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
                        props.isLogin ?
                            (
                                <div className="button level-right is-danger is-outlined" onClick={() => props.delete(book.id)}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg> */}
                                    Remove
                                </div>
                            )
                            :
                            (
                                null
                            )
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
        isLogin: state.LoginReducer.isLogin
    }
};

export default connect(mapStateToProps, {})(DisplayShelf);

