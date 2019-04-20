import React from 'react';
import { withRouter } from 'react-router-dom'

function DisplayReport(props) {

    console.log(props.match.params.chapter_id)
    console.log(props.info)

    const report = props.info.find((chapter) => {
        console.log(chapter.id)
        if(chapter.id === parseInt(props.match.params.chapter_id)) {
            return true
        } else {
            return false
        }
    })

    var notes = ''
    if(report) {
        notes = report.chapter_notes        
    }

    console.log(report)

    return (
        <div className='column is-9 '>
            Book Report
            <h2>{notes}</h2>
        </div>
    )
};

export default withRouter(DisplayReport)