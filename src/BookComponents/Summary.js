import React from 'react';
import { withRouter } from 'react-router-dom'

function Summary(props) {

    // console.log(props.match.params.chapter_id)
    // console.log(props.info)

    

    return (
        <div className='column is-9 '>
            <p className="menu-label">
                Summary
            </p>
            <h2>{props.summary}</h2>
        </div>
    )
};

export default withRouter(Summary)