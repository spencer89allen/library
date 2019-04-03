import React from 'react';

export default function DisplayShelf(props) {
    const books = props.book.map((element, id) => {
        return (
            <div key={element.id} className='container'>
                <br />
                <div className='tile is-ancestor'>
                    <div className='tile is-vertical is-4'>
                        <div className='tile'>
                            <div className='tile is-parent is-vertical'>
                                <article className='tile is-child box'>
                                    <p className="title">
                                        <strong>{element.title}</strong>
                                    </p>
                                    <p className="subtitle">
                                        {element.author}
                                    </p>
                                    <p className="subtitle">
                                        {element.page_count} pages
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {books}
        </div>
    )
};
