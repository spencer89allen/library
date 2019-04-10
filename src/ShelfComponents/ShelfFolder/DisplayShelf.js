import React from 'react';
import { Link } from 'react-router-dom';

export default function DisplayShelf(props) {
    const books = props.book.map(book => {
        return (
            <div className='shelfItem' key={book.id}>
                <p className="title">
                    <strong>{book.title}</strong>
                </p>
                <p className="subtitle">
                    By {book.author}
                </p>
                <img src={book.cover_image}
                    alt="nothing to display"
                    className="image"
                />
                <p>
                    {book.page_count} pages
                </p>
                <div className="level buttons are-small">
                    <Link to={`/book/${book.id}`}>
                        <button className='button level-left'>Read</button>
                    </Link>
                    <button className="button level-right" onClick={() => props.delete(book.id)}>Delete</button>
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

