import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function DisplayShelf(props) {
    const books = props.book.map(book => {
        return (

            <div className='shelfItem' key={book.id}>
                {/* <p className="title">
                        <strong>{book.title}</strong>
                    </p> */}
                <img src={book.cover_image}
                    alt="nothing to display"
                    className="image"
                />
                <p className="subtitle">
                    By {book.author}
                </p>
                <div className="level buttons are-small">
                    <Link to={`/book/${book.id}`}>
                        <button className='button level-left'>Read</button>
                    </Link>
                    {
                        props.isLogin ?
                            (
                                <button className="button level-right" onClick={() => props.delete(book.id)}>Delete</button>
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

