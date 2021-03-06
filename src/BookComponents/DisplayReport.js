import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EditBookModal from './EditBook/EditBookModal';


function DisplayReport(props) {

    // console.log(props.match.params.chapter_id)
    // console.log(props.info)

    const report = props.info.find((chapter) => {
        // console.log(chapter.id)
        if (chapter.id === parseInt(props.match.params.chapter_id)) {
            return true
        } else {
            return false
        }
    })

    var notes = ''
    if (report) {
        notes = report.chapter_notes
        
    }

    var id = ''
    if (report) {
        id = report.id
    }

    //console.log(report)
    //console.log(props.match)
    // console.log(id)

    return (
        <div className='column is-9 '>
            <p className="menu-label">
                {report.chapter_title} Notes
            </p>
            <h2>{notes}</h2>
            <br />
            <br />
            {props.user ?
                (
                    <div className='buttons are-small has-addons is-right'>
                        <span className='button' onClick={() => props.toggleEdit()}>Edit</span>
                        <span className='button' onClick={() => props.delete(id)}>Delete</span>
                    </div>
                    
                )
                :
                
                    null
                

            }
            {
                props.showModal ? <EditBookModal toggleEdit={props.toggleEdit} chapterInfo={report} updateBook={props.updateBook}/>

                :

                null
            }
        
        </div>
    )
};

function mapStateToProps(state) {
    return {
        user: state.LoginReducer.user
    }
};

export default connect(mapStateToProps)(withRouter(DisplayReport))