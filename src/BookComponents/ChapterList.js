import React from 'react';
import { Link, withRouter } from 'react-router-dom'

function ChapterList(props) {
    console.log()
    

    const chapterTitle = props.info.map((chapter) => {
        return (
            <div key={chapter.id}>
                <Link to={`${props.match.url}/chapter/${chapter.id}`}>
                    <h1>{chapter.chapter_title}</h1>
                </Link>
            </div>
        )
    })
    console.log(props.match.url)

    return (

        <div className='column is-3'>
            <aside className="menu ">
                <p className="menu-label">
                    Menu
                </p>
                <ul className="menu-list">
                    <Link to={props.match.url}>
                        <h1>Summary</h1>
                    </Link>
                    {chapterTitle}

                </ul>
            </aside>
        </div>
    )
};

export default withRouter(ChapterList);