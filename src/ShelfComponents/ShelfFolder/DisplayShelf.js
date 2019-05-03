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

